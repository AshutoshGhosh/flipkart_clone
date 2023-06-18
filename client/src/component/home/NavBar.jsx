import { Box, Typography, styled } from "@mui/material";

import { navData } from "../../constants/data";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: " 55px 130px 0 130px",
  justifyContent: "space-between",

  [theme.breakpoints.down("lg")]: {
    margin: "0",
    overflow: "overlay",
  },
}));

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  font-family: inherit;
`;

const NavBar = () => {
  return (
    <Box style={{ backgroundColor: "#fff" }}>
      <Component>
        {navData.map((data) => {
          return (
            <Container>
              <img src={data.url} alt="nav" style={{ width: 65 }} />
              <Text>{data.text}</Text>
            </Container>
          );
        })}
      </Component>
    </Box>
  );
};

export default NavBar;
