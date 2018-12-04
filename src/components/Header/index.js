import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Creators as CategoriesActions } from '../../store/ducks/categories';
import { Creators as ProductsActions } from '../../store/ducks/products';

import {
  Wrapper, Header, Nav, ProppedButton,
} from './styles';

class AppHeader extends Component {
  componentDidMount() {
    this.props.getCategoriesRequest();
  }

  onClick = (id) => {
    this.props.setCategorie(id);
    this.props.getProductsRequest(id);
  };

  render() {
    return (
      <Header>
        <Wrapper>
          <h1>GoCommerce</h1>

          <div>
            <Link to="/cart">
              <FontAwesomeIcon icon="shopping-cart" />
              <span>Meu Carrinho ({this.props.cart})</span>
            </Link>
          </div>
        </Wrapper>
        <Nav>
          {this.props.categories.loading && (
            <div>
              <FontAwesomeIcon icon="spinner" className="fa-spin" size="2x" />
            </div>
          )}
          {this.props.categories.data.length > 0
            && this.props.categories.data.map(categorie => (
              <Link to={`/category_products/${categorie.id}`} key={categorie.id}>
                <ProppedButton
                  key={categorie.id}
                  selected={this.props.categories.selected === categorie.id}
                  onClick={() => this.onClick(categorie.id)}
                  type="button"
                >
                  {categorie.title}
                </ProppedButton>
              </Link>
            ))}
        </Nav>
      </Header>
    );
  }
}

AppHeader.propTypes = {
  cart: PropTypes.number.isRequired,
  categories: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    ),
    selected: PropTypes.number,
    loading: PropTypes.bool,
  }).isRequired,
  setCategorie: PropTypes.func.isRequired,
  getCategoriesRequest: PropTypes.func.isRequired,
  getProductsRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories,
  cart: state.cart.items[1] + state.cart.items[2] + state.cart.items[3] + state.cart.items[4],
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...CategoriesActions, ...ProductsActions }, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AppHeader),
);
