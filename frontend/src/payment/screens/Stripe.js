import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import StripePayment from "./StripePayment";

//add publishable key in stripe for credit/debit card transactions
const  PUBLIC_KEY = "pk_test_51IsBYJDWjRH4nkM8nT8zmAwbGif1Xp3XXb7WvjOp6uYZIeJBsx6gA91HmSAhXHd5FR66sx6kbeVQq3sDFCtPX1KS00pAZ0HDIk"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripPay() {
    return (
        <Elements stripe={stripeTestPromise}>
            <StripePayment />
        </Elements>
    )
};
