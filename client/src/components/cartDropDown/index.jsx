// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components
import { Button, CartItem } from '../../components';

// Other
import './index.styles.scss';
import { cartSelector, toggleCartVisibility } from '../../redux/cart';

export const CartDropDown = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cartItems } = useSelector(cartSelector);

  const cartItemsJSX = cartItems.length
    ? cartItems.map((item) => <CartItem key={item.id} item={item} />)
    : <span className='cartMessage'>Your cart is empty</span>;

  const onClickHandler = () => {
    history.push('/checkout');
    dispatch(toggleCartVisibility());
  };

  return (
    <div className='cartDropDown'>
      <div className='cartItems'>
        {cartItemsJSX}
      </div>
      <div className='cartButton'>
        <Button variant='primary' onClick={onClickHandler}>
          Go to checkout
        </Button>
      </div>
    </div>
  );
};
