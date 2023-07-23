import { STORE_PRODUCT, GET_PRODUCTS, UPDATE_PAGE } from './actionTypes';

export const storeProducts = (products) => {
  return {
    type: STORE_PRODUCT,
    payload: products,
  };
};

export const getProducts = (req) => {
  return {
    type: GET_PRODUCTS,
    req,
  };
};

export const updatePage = (page) => {
  return {
    type: UPDATE_PAGE,
    page,
  };
};
