import { STORE_CATEGORIES, STORE_PRODUCT, UPDATE_PAGE } from '../actions/actionTypes';

let initialState = {
  products: [],
  total: 0,
  limit: 10,
  currentPage: 0,
  categories: [],
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

      case STORE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
