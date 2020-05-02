// Core
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import { CheckoutItem } from '../../components';

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
          <span>Product</span>
        </div>

        <div className='headerBlock'>
          <span>Quantity</span>
        </div>

        <div className='headerBlock'>
          <span>Remove</span>
        </div>
      </header>

      <div className='body'>
        {cartItemsJSX}
      </div>

      <div className='total'>
        <span>TOTAL: ${total}</span>
      </div>
      checkoutPage
    </div>
  )
};
