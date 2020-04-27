// Core
import React from 'react';

// Components
import { Button } from '../../components';

// Other
import './index.styles.scss';

export const CartDropDown = () => {
  return (
    <div className='cartDropDown'>
      <div className='cartItems' />
      <div className='cartButton'>
        <Button variant='primary'>Go to checkout</Button>
      </div>
    </div>
  );
};
