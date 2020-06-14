// Core
import React from 'react';
import { useDispatch } from 'react-redux';

// Component
import { ButtonIcon } from '../../components';

// Other
import './index.styles.scss';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../redux/cart';

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  const removeItem = () => dispatch(clearItemFromCart(cartItem));
  const increaseQuantity = () => dispatch(addItemToCart(cartItem));
  const decreaseQuantity = () => dispatch(removeItemFromCart(cartItem));

  return (
    <div className='checkoutItem'>
      <div className='imageContainer'>
        <img
          className='image'
          src={imageUrl}
          alt='checkout item'
        />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='arrow' onClick={decreaseQuantity}>&#10094;</span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={increaseQuantity}>&#10095;</span>
      </span>
      <span className='price'>${price}</span>
      <ButtonIcon
        type='button'
        variant='tertiary'
        onClick={removeItem}
        className='removeButton'
        icon={<b>&#10005;</b>}
      />
    </div>
  );
};
