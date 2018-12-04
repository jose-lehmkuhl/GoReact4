import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Creators as ProductActions } from '../../store/ducks/product';
import { Creators as CartActions } from '../../store/ducks/cart';

import { Wrapper, Spinner, Item } from './styles';

class Details extends Component {
  componentDidMount() {
    this.props.getProductRequest(this.props.match.params.id);
  }

  render() {
    return (
      <Wrapper>
        {this.props.loading ? (
          <Spinner>
            <FontAwesomeIcon icon="spinner" className="fa-spin" size="8x" />
          </Spinner>
        ) : (
          <Item>
            <div>
              <img src={this.props.product.image} alt={this.props.product.name} />
            </div>
            <div>
              <h3>{this.props.product.name}</h3>
              <p>{this.props.product.brand}</p>
              <h2>
                R$
                {this.props.product.price}
              </h2>
              <button type="button" onClick={() => this.props.addItem(this.props.product.id)}>
                Adicionar ao carrinho
              </button>
            </div>
          </Item>
        )}
      </Wrapper>
    );
  }
}

Details.propTypes = {
  getProductRequest: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  selectedCategorie: state.categories.selected,
  product: state.product.data,
  loading: state.product.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ProductActions, ...CartActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
