import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_1rZhG6WZTfZwCnfB9HiSFaXi00UwLVq9TK';

    const onToken = token => {
        console.log(token);
        alert('Successful payments');
    }

    return <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
};

export default stripeCheckoutButton;