import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCTS, SEARCH_PRODUCTS, FETCH_CATEGORIES } from './actions/actionTypes';
import { storeProducts, storeCategories } from './actions';

async function request(requestURL, method = 'GET') {
  const options = {
    method,
    mode: 'cors',
    headers: {
      Accept: 'application/json',
    },
  };
  return fetch(requestURL, options).then((res) => res.json());
}

function* fetchProducts({ req }) {
  try {
    const { limit, skip } = req;
    const requestURL = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    const response = yield call(request, requestURL);
    yield put(storeProducts(response));
  } catch (error) {
    // Handle errors if necessary
    console.error('API Call Error:', error);
  }
}

function* searchProducts({ req }) {
  try {
    const { name } = req;
    const requestURL = `https://dummyjson.com/products/search?q=${name}&limit=${10}`;
    const response = yield call(request, requestURL);
    yield put(storeProducts(response));
  } catch (error) {
    // Handle errors if necessary
    console.error('API Call Error:', error);
  }
}

function* fetchCategories({ }) {
  try {
    const requestURL = `https://dummyjson.com/products/categories`;
    const response = yield call(request, requestURL);
    yield put(storeCategories(response));
  } catch (error) {
    // Handle errors if necessary
    console.error('API Call Error:', error);
  }
}

function* rootSaga() {
  yield takeLatest(GET_PRODUCTS, fetchProducts);
  yield takeLatest(SEARCH_PRODUCTS, searchProducts);
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
}

export default rootSaga;
