import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import axios from "axios";
import {PayPalButton} from "react-paypal-button-v2";
import './PayPalPayment.css';
import {useLocation} from "react-router-dom";

const PayPalPayment = () => {
    const location = useLocation();
    const [sdkReady, setSdkReady] = useState(false);
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const toPrice = (num) => (Number(num.toFixed(2)));

    const successPaymentHandler = () => {
        //
    }

    const localUser = JSON.parse(localStorage.getItem('UserProfile')) || null;
    let [user,setUser] = useState(localUser);


    useEffect(()=>{
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('UserProfile')));
        console.log("data " +user);

    },[location]);

    const getCartCount = () => {
        return cartItems.reduce((qty,item) => qty = Number(item.qty) + qty,0);
    }
    const getCartSubTotal = () => {
        return cartItems.reduce((price,item) => (item.price * item.qty) + price,0)
    };
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
        <div className="payment-container">
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card">
                                <div className="cartScreenInfo">
                                    <p>Payment method : PayPal</p>
                                    <p>Total cart items: {getCartCount()} </p>
                                    <p>Total payment: ${getCartSubTotal().toFixed(2)}</p>
                                </div>

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
