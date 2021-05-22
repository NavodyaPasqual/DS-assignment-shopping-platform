import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import './MobilePayment.css';
import axios from "axios";
import {API} from "../../config";

//key for sendgrid mail service
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");


const MobilePayment = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        mobileno: '',
        nationalid: '',
        error: '',
        success: false
    });

    const {name, email, mobileno, nationalid, success, error} = values

    //handle the input values, error and  success
    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value});
    };
    //Get values from cart
    const cart = useSelector((state) => state.cart);

    //Send values to backend
    const pay = (mpay) => {
        return fetch(`${API}/mobilepay`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mpay)
        })

            //  axios.post(`http://localhost:5000/api/mobilepay`, mpay)
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    }

    //Check input fields and complete the payment
    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error: false})
        pay({name, email, mobileno, nationalid})
            .then(data => {
                if (data.error) {
                    setValues({...values, error: data.error, success: false})
                } else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        mobileno: '',
                        nationalid: '',
                        error: '',
                        success: true
                    })
                   sgMail.send(emailData)
                        .then(sent =>
                            console.log('Email sent'))
                        .catch(error =>
                            console.log('Error'));
                }
            })
    };

    //Form to be filled for the mobile payment
    const signUPForm = () => (

        <form>
            {/*<div className="row ">
                <label htmlFor="staticEmail" className="col-sm-3 col-form-label text-right"><h5> Full Name : </h5>
                </label>
                <div className="col-sm-9">
                    <div className="input-group mb-3">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input onChange={handleChange('name')} value={name}  type="text" className="form-control" placeholder="Full Name"/>
                        <br/>
                    </div>
                </div>
            </div>
            <br/>

            <div className="row ">
                <label htmlFor="staticEmail" className="col-sm-3 col-form-label text-right"><h5> Email : </h5>
                </label>
                <div className="col-sm-9">
                    <div className="input-group mb-3">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                        <input onChange={handleChange('email')} value={email} type="email" className="form-control" placeholder="Email"/>
                        <br/>
                    </div>
                </div>
            </div>
            <br/>

            <div className="row ">
                <label htmlFor="staticEmail" className="col-sm-3 col-form-label text-right"><h5> Mobile Number : </h5>
                </label>
                <div className="col-sm-9">
                    <div className="input-group mb-3">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                        <input onChange={handleChange('mobileno')} type="number" value={mobileno} className="form-control" placeholder="Mobile Number"/>
                        <br/>
                    </div>
                </div>
            </div>
            <br/>

            <div className="row ">
                <label htmlFor="staticEmail" className="col-sm-3 col-form-label text-right"><h5> National ID : </h5>
                </label>
                <div className="col-sm-9">
                    <div className="input-group mb-3">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input onChange={handleChange('nationalid')} type="text" value={nationalid} className="form-control" placeholder="National ID"/>
                        <br/>
                    </div>
                </div>
            </div>
            <br/>
*/}
            <div className="form-group">
                <label className="text-muted">Full Name</label>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control"/>
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control"/>
            </div>

            <div className="form-group">
                <label className="text-muted">Mobile Number</label>
                <input onChange={handleChange('mobileno')} type="number" value={mobileno} className="form-control"/>
            </div>

            <div className="form-group">
                <label className="text-muted">National ID</label>
                <input onChange={handleChange('nationalid')} type="text" value={nationalid} className="form-control"/>
            </div>
            <br/>
            <button onClick={clickSubmit} className="btn btn-info btn-lg btn-block"> Pay</button>

        </form>

    );

    //Send email to buyer with transaction details
    const emailData = {
        to: email,
        from: 'sljay827@gmail.com',
        subject: `Your items are ready to deliver`,
        text:
            `<h2> Total cost: ${cart.price} </h2>
         <p> Thank you for shopping with us.</p>`
    };

    //Show error when an error occured
    const showError = () => {
        return (<div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
                {error}
            </div>
        );
    };

    //Show success if there is no any error
    const showSuccess = () => {
        return (<div className="alert alert-info" style={{display: success ? '' : 'none'}}>
                Payment Successful!
            </div>
        );
    };


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
                                <h2>Connection Details</h2>
                                {showError()}
                                {showSuccess()}
                                {signUPForm()}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default MobilePayment;
