// Core
import React from 'react';

// Other
import './index.styles.scss';

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return(
    <div className='cartItem'>
      <img className='image' src={imageUrl} alt='cart item' />
      <div className='details'>
        <span className='name'>{name}</span>
        <span className='price'>{price} x {quantity}</span>
      </div>
    </div>
  );
};

