import { Box, Button, ButtonGroup, styled } from "@mui/material";
import React from "react";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

const GroupedButton = ({ quantity }) => {
  return (
    <Component>
      <StyledButton>-</StyledButton>
      <Button disabled>{quantity}</Button>
      <StyledButton>+</StyledButton>
    </Component>
  );
};

export default GroupedButton;
