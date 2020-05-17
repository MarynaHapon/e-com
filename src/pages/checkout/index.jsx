// Core
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import { CheckoutItem, CheckoutButton } from '../../components';

// Other
import './index.styles.scss';
import { cartSelector } from '../../redux/cart';

export const CheckoutPage = () => {
  const { cartItems } = useSelector(cartSelector);

  const total = cartItems.reduce((acc, cardItem) => acc + cardItem.price, 0);

  const cartItemsJSX = cartItems.map((cartItem) => (
    <CheckoutItem
      key={cartItem.id}
      cartItem={cartItem}
    />
  ));

  return (
    <div className='checkoutPage'>
      <header className='header'>
        <div className='headerBlock'>
          <span>Product</span>
        </div>

        <div className='headerBlock'>
          <span>Description</span>
        </div>

        <div className='headerBlock'>
          <span>Quantity</span>
        </div>

        <div className='headerBlock'>
          <span>Price</span>
        </div>

        <div className='headerBlock'>
          <span>Remove</span>
        </div>
      </header>

      <div className='body'>
        {cartItemsJSX}
        <CheckoutButton price={total} />
      </div>

      <div className='testWarning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp 01/22 - CVV: 123
      </div>

      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  )
};
