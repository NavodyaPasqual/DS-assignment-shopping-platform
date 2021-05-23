import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {saveMethod} from "../../cart/functions/actions/cartActions";
import './PaymentScreen.css';


const PaymentScreen = (props) => {

    //handle the type of payment method
    const [Method, SetMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveMethod(Method));
        //Set paypal payment
        if (Method === 'PayPal') {
            props.history.push('/paypalpayment');
        } //Set mobile payment
        else if (Method === 'MobileBill'){
            props.history.push('/mobilepayment');
        } //Set credit/debit card payment
        else {
            props.history.push('/stripepayment');
        }
    };

    return (
        <div className="payment-container">
            <form className="form-group" onSubmit={submitHandler}>
                <div className="cardd cardd-body">
                    <div>
                        <h2>Select Payment Method</h2>
                    </div>
                    <br/>
                    <div>
                        <div>
                            <input className="form-check-input"
                                   type="radio"
                                   id="stripe"
                                   value="Stripe"
                                   name="Method"
                                   required
                                   onChange={(e) => SetMethod(e.target.value)}>
                            </input>
                            <label htmlFor="stripe" style={{marginLeft: 10}}><h5>Credit or Debit Card</h5></label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input class="form-check-input"
                                   type="radio"
                                   id="paypal"
                                   value="PayPal"
                                   name="Method"
                                   required
                                   onChange={(e) => SetMethod(e.target.value)}>
                            </input>
                            <label htmlFor="paypal" style={{marginLeft: 10}}><h5>PayPal</h5></label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <input class="form-check-input"
                                   type="radio"
                                   id="mobilebill"
                                   value="MobileBill"
                                   name="Method"
                                   required
                                   onChange={(e) => SetMethod(e.target.value)}>
                            </input>
                            <label htmlFor="mobilebill" style={{marginLeft: 10}}><h5>Mobile Bill</h5></label>
                        </div>
                    </div>
                    <br/>
                    <div className="btnn">
                        <button className="btn btn-primary"> Continue</button>
                    </div>

                </div>
            </form>
        </div>
    )
};

export default PaymentScreen
