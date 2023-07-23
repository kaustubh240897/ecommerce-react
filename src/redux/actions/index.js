import { STORE_PRODUCT, GET_PRODUCTS, UPDATE_PAGE, SEARCH_PRODUCTS, FETCH_CATEGORIES, STORE_CATEGORIES } from './actionTypes';

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

export const searchProducts = (req) => {
  return {
    type: SEARCH_PRODUCTS,
    req,
  };
};

export const fetchCategories = () => {
  return {
    type: FETCH_CATEGORIES,
  };
};
export const storeCategories = (categories) => {
  return {
    type: STORE_CATEGORIES,
    payload: categories,
  };
};

