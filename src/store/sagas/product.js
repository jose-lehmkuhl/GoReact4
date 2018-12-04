import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as productActions } from '../ducks/product';

export function* getProduct(action) {
  console.log();
  try {
    const response = yield call(api.get, `/products/${action.payload}`);

    yield put(productActions.getProductSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
