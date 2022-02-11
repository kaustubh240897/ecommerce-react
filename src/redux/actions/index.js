import { ADD_PRODUCT, CHECKOUT, GET_PRODUCTS } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const checkout = () => {
  return {
    type: CHECKOUT,
  };
};
