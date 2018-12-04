import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';

import {
  Wrapper, ListItem, ItemInfo, NoItems, ItemsHeader, Total,
} from './styles';

class Cart extends Component {
  getTotal = () => {
    let total = 0;
    this.props.products.data.products.forEach((el) => {
      total += el.price * this.props.items[el.id];
    });
    return total;
  };

  getCartItems = () => {
    const items = [];
    Object.keys(this.props.items).forEach((key) => {
      const product = this.props.products.data.products.filter(
        el => this.props.items[key] > 0 && el.id === parseInt(key, 10),
      );
      if (product[0]) {
        items.push({ product: product[0], quantity: this.props.items[key] });
      }
    });
    return items;
  };

  render() {
    return (
      <Fragment>
        <Wrapper>
          {this.props.onCart === 0 ? (
            <NoItems>Nenhum item adicionado ao carrinho.</NoItems>
          ) : (
            <Fragment>
              <ItemsHeader>
                <div>PRODUTO</div>
                <div>
                  <div>VALOR</div>
                  <div>QTD</div>
                  <div>SUBTOTAL</div>
                </div>
              </ItemsHeader>
              {this.getCartItems().map(item => (
                <ListItem key={item.product.id}>
                  <div>
                    <img src={item.product.image} alt={item.product.name} />
                    <div>
                      <h3>{item.product.name}</h3>
                      <p>{item.product.brand}</p>
                    </div>
                  </div>
                  <ItemInfo>
                    <h2>R$ {item.product.price}</h2>
                    <input
                      value={item.quantity}
                      type="number"
                      onChange={e =>
                        this.props.setItem(
                          item.product.id,
                          e.target.value <= 0 ? 1 : parseInt(e.target.value, 10),
                        )
                      }
                    />
                    <h2>R$ {(item.quantity * item.product.price).toFixed(2)}</h2>
                    <button type="button" onClick={() => this.props.removeItem(item.product.id)}>
                      <FontAwesomeIcon icon="times" />
                    </button>
                  </ItemInfo>
                </ListItem>
              ))}
            </Fragment>
          )}
        </Wrapper>
        {this.props.products.data.products && (
          <Total>
            <p>TOTAL: </p>
            <h2>R$ {this.getTotal().toFixed(2)}</h2>
          </Total>
        )}
      </Fragment>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.shape({
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
  items: PropTypes.shape({}).isRequired,
  onCart: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
  setItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
  items: state.cart.items,
  onCart: state.cart.items[1] + state.cart.items[2] + state.cart.items[3] + state.cart.items[4],
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
