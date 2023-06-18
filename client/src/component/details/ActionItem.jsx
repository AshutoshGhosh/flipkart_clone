import { FlashOn, ShoppingCart } from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/actions/cartAction";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  width: "90%",
  padding: "15px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: "50px",
  borderRadius: "2px",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));

function ActionItem({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = product;

  const [quantity, setQuantity] = useState(1);

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  const buyNow = async () => {
    let paytmPayment = await payUsingPaytm({
      amount: 500,
      email: "xyz@gmail.com",
    });

    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: paytmPayment,
    };
    post(information);
  };

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
        }}
      >
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
        onClick={() => addItemToCart()}
      >
        <ShoppingCart /> Add to cart
      </StyledButton>
      <StyledButton
        variant="contained"
        onClick={() => buyNow()}
        style={{ background: "#fb541b" }}
      >
        <FlashOn /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
}

export default ActionItem;
