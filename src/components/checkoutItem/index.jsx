// Core
import React from 'react';

// Other
import './index.styles.scss';

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

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
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className='removeButton'>
        &#10005;
      </div>
    </div>
  );
};
