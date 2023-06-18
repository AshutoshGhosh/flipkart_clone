import {
  GET_PRODUCT_DETAIL_FAILURE,
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_RESET,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS,
} from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return { products: action.payload.products };
    case GET_PRODUCT_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (
  state = { loading: false, product: {} },
  action
) => {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_REQUEST:
      return { loading: true };
    case GET_PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: action.payload.product };
    case GET_PRODUCT_DETAIL_RESET:
      return { loading: false, product: {} };
    case GET_PRODUCT_DETAIL_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


