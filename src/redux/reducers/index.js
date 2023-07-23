import { STORE_PRODUCT, UPDATE_PAGE } from '../actions/actionTypes';

let initialState = {
  products: [],
  total: 0,
  limit: 10,
  currentPage: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_PRODUCT:
      return {
        ...state,
        products: action.payload.products,
        total: action.payload.total,
        limit: action.payload.limit,
      };

    case UPDATE_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };

    default:
      return state;
  }
};

export default productReducer;
