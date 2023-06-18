import { useState, useContext } from "react";
import { Badge, Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { LoginContext } from "../../context/DataProvider";

// Components
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  "& > *": {
    marginRight: "40px !important",
    fontSize: 16,
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
    "& > *": {
      marginTop: 10,
    },
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const [accountDetails, setAccountDetails] = useContext(LoginContext);

  const { cartItems } = useSelector((state) => state.cart);

  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {accountDetails ? (
        <Profile
          account={accountDetails}
          setAccountDetails={setAccountDetails}
        ></Profile>
      ) : (
        <LoginButton variant="container" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container to="/cart">
        <Badge badgeContent={cartItems?.length} color="error">
          <ShoppingCart />
        </Badge>
        <Typography style={{marginLeft: 10}}>Cart</Typography>
      </Container>
      <LoginDialog
        open={open}
        setOpen={setOpen}
        setAccountDetails={setAccountDetails}
      />
    </Wrapper>
  );
};

export default CustomButtons;
