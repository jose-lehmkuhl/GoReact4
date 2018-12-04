import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as productsActions } from '../ducks/products';

export function* getProducts(action) {
  console.log();
  try {
    const response = yield call(api.get, `/category_products/${action.payload}`);

    yield put(productsActions.getProductsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
