// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Other
import './index.styles.scss';
import { ReactComponent as IconBag } from '../../assets/images/iconBag.svg';
import { toggleCartVisibility, cartSelector } from '../../redux/cart';

export const CardIcon = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(cartSelector);

  const onClickHandler = () => dispatch(toggleCartVisibility());

  const count = cartItems.reduce((acc, cardItem) => acc + cardItem.quantity, 0);

  return (
    <div className='cartIcon' onClick={onClickHandler}>
      <IconBag className='cartIconBag' />
      <span className='cartIconCount'>{count}</span>
    </div>
  )
};

