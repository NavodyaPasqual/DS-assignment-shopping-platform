import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import axios from "axios";
import {PayPalButton} from "react-paypal-button-v2";
import './PayPalPayment.css';

const PayPalPayment = () => {

    const [sdkReady, setSdkReady] = useState(false);

    const cart = useSelector((state) => state.cart);

    const toPrice = (num) => (Number(num.toFixed(2)));

    const successPaymentHandler = () => {
        //
    }
    //PayPal script for payment
    useEffect(() => {
        const addPayPalScript = async () => {
            const {data} = await axios.get('/api/config/paypal');
            const script = document.createElement('script');
            script.type = "text/javascript";
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);
        };
        if (!window.paypal) {
            addPayPalScript();
        } else {
            setSdkReady(true);
        }
    }, [])

    return (
        <div>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Payment</h2>
                                <p>
                                    <strong>Method:</strong> {cart.Method}
                                </p>
                                <p>
                                    <strong>Total Amount:</strong>$499
                                </p>
                            </div>
                        </li>
                        <li>
                           <div className="card card-body">
                               {
                                   <PayPalButton>
                                       price={cart.price}
                                       onSuccess={successPaymentHandler}
                                   </PayPalButton>
                               }
                           </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default PayPalPayment;
