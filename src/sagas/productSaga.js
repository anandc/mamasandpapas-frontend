import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchProducts, fetchColors } from '../Api/api';
import * as types from '../constants/actionTypes';
import { receiveProductAction, receiveColorAction } from '../actions/productActions';

const mapDataToJson = (data) => {
  let products = [];
    if (data && data.hits) {
      products = data.hits.map((item) => ({
        name: item.name,
        image: item.image,
        price: item.minPrice
      }));
    }
    return products;
  };
export function* searchProductSaga({ payload: {searchString, selectedColor} }) {
  try {
    const data = yield call(fetchProducts, searchString, selectedColor);
    yield put(receiveProductAction(mapDataToJson(data)));
  } catch (error) {
    yield put({ type: 'FETCH_ERROR', error });
  }
}

export function* searchProducts() {
  yield takeLatest(types.SEARCH_REQUEST, searchProductSaga)
}

export function* searchColorsSaga({ payload }) {
  try {
    const data = yield call(fetchColors, payload);
    if (data) {
      const colors = Object.keys(data).map((key) => key.charAt(0).toUpperCase() + key.slice(1).toLowerCase());
      yield put(receiveColorAction(colors));
    }
  } catch (error) {
    yield put({ type: 'FETCH_ERROR', error });
  }
}

export function* searchColors() {
  yield takeLatest(types.COLOR_REQUEST, searchColorsSaga)
}

export function* searchCriteriaChangeSaga({ payload: {searchString, selectedColor} }) {
  try {
    const data = yield call(fetchProducts, searchString, selectedColor);
    yield put(receiveProductAction(mapDataToJson(data)));
  } catch (error) {
    yield put({ type: 'FETCH_ERROR', error });
  }
}

export function* searchCriteriaChange() {
  yield takeLatest(types.SEARCH_CRITERIA_CHANGED, searchCriteriaChangeSaga)
}

