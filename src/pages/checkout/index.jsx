// Core
import React from 'react';

// Components
import { Checkout, Shape } from '../../components';

// Other
import './index.styles.scss';

export const CheckoutPage = () => {
  return (
    <div className='checkoutPage'>
      <Shape type='tertiary' width={40} height={60} top={-15} left={-15} />
      <Shape type='secondary' width={62} height={80} bottom={-35} right={-15} />
      <Checkout />
    </div>
  )
};
