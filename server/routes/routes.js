import express from "express";

import { userSignup,  userLogIn } from "../controller/userController.js";

import { getProducts, getProductDetails } from "../controller/productController.js";
import { addPaymentGateway, paytmResponse } from "../controller/paymentController.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogIn);

router.get("/products", getProducts);
router.get("/product/:id", getProductDetails);

router.post("/payment", addPaymentGateway);

router.post("/callback", paytmResponse);

export default router;
