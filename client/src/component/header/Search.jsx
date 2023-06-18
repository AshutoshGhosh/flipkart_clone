import { InputBase, Box, List, ListItem, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconwrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState();

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (e) => {
    setText(e);
  };
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        onChange={(e) => getText(e.target.value)}
        inputProps={{ "aria-label": "search" }}
        value={text}
      />
      <SearchIconwrapper>
        <SearchIcon />
      </SearchIconwrapper>
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((prod) => {
              return (
                <ListItem>
                  {" "}
                  <Link
                    to={`product/${prod.id}`}
                    onClick={() => setText("")}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {prod.title.longTitle}
                  </Link>
                </ListItem>
              );
            })}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
