import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from '../ducks/categories';
import { Types as ProductsTypes } from '../ducks/products';
import { Types as ProductTypes } from '../ducks/product';

import { getCategories } from './categories';
import { getProducts } from './products';
import { getProduct } from './product';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
    takeLatest(ProductsTypes.GET_REQUEST, getProducts),
    takeLatest(ProductTypes.GET_REQUEST, getProduct),
  ]);
}
