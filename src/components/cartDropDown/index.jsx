// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import { Button, CartItem } from '../../components';

// Other
import './index.styles.scss';
import { cartSelector } from '../../redux/cart';

export const CartDropDown = () => {
  const { cartItems } = useSelector(cartSelector);

  const cartItemsJSX = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  return (
    <div className='cartDropDown'>
      <div className='cartItems'>
        {cartItemsJSX}
      </div>
      <div className='cartButton'>
        <Button variant='primary'>Go to checkout</Button>
      </div>
    </div>
  );
};
