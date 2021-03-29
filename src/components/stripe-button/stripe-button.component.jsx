import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({ price }) => {
    // Stripe needs value in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IaTLWHtDGZSCYwfbhXwF5qhRpA46ep0V1IfmSD7aHFoMtVaNabXLAmc9kXTQDZoVscmsrjLtiyKJplgIoFLpUyw000DfI7f85';

    const onToken = token => {
        alert('Payment Successful');
    };
    
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripCheckoutButton;