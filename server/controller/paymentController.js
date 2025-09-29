import paytmchecksum from "../paytm/PaytmChecksum.js";
import { paytmParams, paytmMerchantkey } from "../index.js";

import formidable from "formidable";

import https from "https";

export const addPaymentGateway = async (request, response) => {
  try {
    let paytmChecksum = await paytmchecksum.generateSignature(
      paytmParams,
      paytmMerchantkey
    );

    let params = {
      ...paytmParams,
      CHECKSUMHASH: paytmChecksum,
    };

    response.status(200).json(params);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const paytmResponse = async (request, response) => {
  const form = new formidable.IncomingForm();
  let paytmChecksum = request.body.CHECKSUMHASH;
  delete request.body.CHECKSUMHASH;

  let isVerifySignature = paytmchecksum.verifySignature(
    request.body,
    paytmMerchantkey,
    paytmChecksum
  );
  if (isVerifySignature) {
    let paytmParams = {
      MID: request.body.MID,
      ORDERID: request.body.ORDERID,
    };

    paytmchecksum
      .generateSignature(paytmParams, paytmMerchantkey)
      .then((checksum) => {
        paytmParams["CHECKSUM"] = checksum;

        let post_data = JSON.stringify(paytmParams);

        let options = {
          hostname: "securegw-stage.paytm.in",
          port: 443,
          path: "/order/status",
          headers: {
            "content-type": "application/json",
            "content-length": post_data.length,
          },
        };
        let res = "";
        let post_req = https.request(options, (post_res) => {
          post_res.on("data", (chunk) => {
            res += chunk;
          });

          post_req.on("end", () => {
            let result = JSON.parse(res);
            response.redirect("http://localhost:3000");
          });
        });

        post_req.write(post_data);
        post_req.end();
      });
  } else {
    console.log("checksum missmatch");
  }
};
