import axios from "axios";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILURE,
  GET_PRODUCT_DETAIL_REQUEST,
} from "../constants/productConstants";

const url = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/products`);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error while calling Product API: ", error.message);
    dispatch({ type: GET_PRODUCT_FAILURE, payload: error.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAIL_REQUEST });
    const { data } = await axios.get(`${url}/product/${id}`);
    dispatch({ type: GET_PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    console.log("Error while calling Product Detail API: ", error.message);
    dispatch({ type: GET_PRODUCT_DETAIL_FAILURE, payload: error.message });
  }
};
