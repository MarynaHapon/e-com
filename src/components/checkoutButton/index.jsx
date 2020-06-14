// Core
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Components
import { Button } from '../../components';

// Other
import './index.styles.scss';

export const CheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_bXOWAWjVuHgxelvNVfWN9LSE00Ozt0cTJu';

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <div className='checkoutButton'>
      <StripeCheckout
        label='Pay Now'
        name='E-com Ltd.'
        billingAddress='billing address'
        shippingAddress='shipping address'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      >
        <Button type='button' variant='primary'>Pay Now ${price}</Button>
      </StripeCheckout>
    </div>
  )
};
