import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from '../../store/ducks/products';

import { Wrapper, ListItem, Spinner } from './styles';

class ProductsList extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getProductsRequest(this.props.match.params.id);
    } else {
      // aaaaa
      this.props.getProductsRequest(1);
    }
  }

  render() {
    return (
      <Wrapper>
        {this.props.products.loading ? (
          <Spinner>
            <FontAwesomeIcon icon="spinner" className="fa-spin" size="8x" />
          </Spinner>
        ) : (
          this.props.products.data.products
          && this.props.products.data.products.map(product => (
            <ListItem key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.brand}</p>
                  <h2>{product.price}</h2>
                </div>
              </Link>
            </ListItem>
          ))
        )}
      </Wrapper>
    );
  }
}

ProductsList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  products: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.shape({
      id: PropTypes.number,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          brand: PropTypes.string,
          image: PropTypes.string,
          price: PropTypes.number,
        }),
      ),
    }),
    selected: PropTypes.number,
  }).isRequired,
  getProductsRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsList);
