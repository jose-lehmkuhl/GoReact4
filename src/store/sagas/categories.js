import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as categoriesActions } from '../ducks/categories';

export function* getCategories() {
  try {
    const response = yield call(api.get, '/categories');

    yield put(categoriesActions.getCategoriesSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
