// Core
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

// Components
import { Button } from '../../components';

// Other
import './index.styles.scss';

export const CheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_bXOWAWjVuHgxelvNVfWN9LSE00Ozt0cTJu';

  const onToken = (token) => {

    console.log(token);
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      }
    })
      .then((response) => {
        alert('Payment successful');
        console.log(`Payment Success: ${response}`);
      })
      .catch((error) => {
        alert('There was an issue with your payment. Please sure you use provided credit cart');
        console.log(`Payment Error: ${error}`);
      });
  };

  return (
    <div className='checkoutButton'>
      <StripeCheckout
        label='Pay Now'
        name='E-com Ltd.'
        // billingAddress={true}
        // shippingAddress={true}
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
