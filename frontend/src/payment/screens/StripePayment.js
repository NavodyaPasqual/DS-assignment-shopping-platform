import React, {useState} from "react";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "axios";
import "./StripePayment.css";
import {useSelector} from "react-redux";

//Card options for stripe element
const OPTIONS = {
    iconStyle: "solid",
    style : {
        base : {
            marginTop: "150px",
            iconColor: "#00FFFF",
            color: "#fff",
            fontWeight: 500,
            fontfamily: " Segoe UI, sans-serif",
            fontsize: "16px",
            ":-webkit-autofill": {color: "#fce883"},
            "::placeholder":{color: "#A9A9A9"}
        },
        invalid: {
            iconColor: "#ff0000",
            color: "#ff0000"
        }
    }
}

export default function StripePayment() {

    const cart = useSelector((state) => state.cart);

    const [success, setSuccess] = useState(false)

    //use stripe methods
    const stripe = useStripe()
    const elements = useElements()

    //payment creation
    const handleSubmit = async (event) => {
        event.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        //if no error send transaction details to backend
        if (!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:5000/api/stripepayment", {
                    amount: 49900,
                    id
                })
                if (response.data.success) {
                    //if success set success state to true
                    setSuccess(true)
                }
            } catch (error) {
                //show error if there is an error
            }
        } else {
            //show error
        }
    }
    return (
        <div className="payment-container">
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="carddd card-body">
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
                            <div className="carddd card-body">
                                <>
                                    {!success ?
                                        <form onSubmit={handleSubmit}>
                                            <fieldset className="FormGroupCus">
                                                <div className="FormRowCus">
                                                    <CardElement options={OPTIONS}></CardElement>
                                                </div>
                                            </fieldset>
                                            <button className="btn btn-info btn-lg btn-block">Pay</button>
                                        </form>
                                        :
                                        <div>
                                            <h2> Payment Successful! Thank you!</h2>
                                        </div>
                                    }
                                </>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
