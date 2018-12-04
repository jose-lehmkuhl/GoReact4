import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ProductsList from '../components/ProductsList';
import Details from '../components/Details';
import Cart from '../components/Cart';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ProductsList} />]
    <Route path="/category_products/:id" component={ProductsList} />]
    <Route path="/products/:id" component={Details} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
