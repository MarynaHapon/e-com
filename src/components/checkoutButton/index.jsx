// Core
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

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
        name='SHOP Ltd.'
        billingAddress='billing address'
        shippingAddress='shipping address'
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  )
};
