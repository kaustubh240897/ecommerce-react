import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCTS } from './actions/actionTypes';
import { storeProducts } from './actions';

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

function* rootSaga() {
  yield takeLatest(GET_PRODUCTS, fetchProducts);
}

export default rootSaga;
