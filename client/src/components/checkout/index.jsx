// Core
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import { CheckoutItem, CheckoutButton } from '../../components';

// Other
import './index.styles.scss';
import { cartSelector } from '../../redux/cart';

export const Checkout = () => {
  const { cartItems } = useSelector(cartSelector);
  const total = cartItems.reduce((acc, cardItem) => (acc + (cardItem.price * cardItem.quantity)), 0);

  const cartItemsJSX = cartItems.map((cartItem) => (
    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
  ));

  return (
    <div className='checkout'>
      <header className='checkoutHeader'>
        <div className='checkoutHeaderBlock'>
          <span>Product</span>
        </div>
        <div className='checkoutHeaderBlock'>
          <span>Description</span>
        </div>
        <div className='checkoutHeaderBlock'>
          <span>Quantity</span>
        </div>
        <div className='checkoutHeaderBlock'>
          <span>Price</span>
        </div>
        <div className='checkoutHeaderBlock'>
          <span>Remove</span>
        </div>
      </header>

      <div className='checkoutBody'>
        {cartItemsJSX}
      </div>

      <div className='checkoutFooter'>
        <div className='checkoutFooterBlock'>
          <div className='message isError'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp 01/22 - CVV: 123
          </div>
        </div>
        <div className='checkoutFooterBlock'>
          <CheckoutButton price={total} />
        </div>
      </div>
    </div>
  );
};
