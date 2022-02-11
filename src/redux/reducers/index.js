import { ADD_PRODUCT, CHECKOUT, GET_PRODUCTS } from "../actions/actionTypes";
const data = require("../../data/data.json");

let initialState = {
  products: [],
  cartData: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: data,
      };
    case CHECKOUT:
      return {
        ...state,
        cartData: [],
      };
    default:
      return state;
  }
};

export default productReducer;
