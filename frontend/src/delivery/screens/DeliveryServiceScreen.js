import {Link, useHistory, useLocation} from "react-router-dom";
import "../style/dilivaryStyle.css"
import {Container, Paper, Radio, TextField, Hidden, RadioGroup, Typography, Button} from "@material-ui/core"
import dilivary from"../style/dilivary";
import React, {useEffect, useState,} from "react";
import {useSelector} from "react-redux";
import CartItems from "../../cart/components/CartItems";
import {singIn, singUp} from "../../user/action/auth";
import {useDispatch} from "react-redux";
import {deliveryReducer} from "../reducer/diliveryReducer";
import {createDelivery} from "../action/dilivery"

const initialState ={name:'',userId:'',country:'',city:'',address:'',postalCode:'',contact:'',items:'',amount:''};

const DeliveryServiceScreen = () =>{
    const classes = dilivary;
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData,setFormData]=useState(initialState);
    const location = useLocation();
    const localUser = JSON.parse(localStorage.getItem('UserProfile')) || null;
    let [user,setUser] = useState(localUser);



    useEffect(()=>{
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('UserProfile')));
        console.log("data " +user);

    },[location]);



    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const onchange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const onSubmit=(e) =>{
        e.preventDefault();
        const userId = user.result._id;
        const amount = getCartSubTotal().toFixed(2);
        const items = getCartCount();
        const submitData = {
            name:formData.name,
            country:formData.country,
            city: formData.city,
            address: formData.address,
            postalCode: formData.postalCode,
            contact: formData.contact,
            userId: userId,
            amount:amount,
            items:items
        }
        createDelivery(submitData);
        console.log(submitData);

    }
    const getCartCount = () => {
        return cartItems.reduce((qty,item) => Number(item.qty) + qty,0)
    };
    const getCartSubTotal = () => {
        return cartItems.reduce((price,item) => (item.price * item.qty) + price,0)
    };

    return (
        <Container className="deli-container" maxWidth="md">
            <Paper className="paper">
               <div className="left-content ">
                   <form className={classes.form}>
                       <Typography className="form-heading" variant="h5">Dilivery Details</Typography>
                       <div className="form-item">
                           <TextField name="name"  variant="outlined" fullWidth="100%" label="Full name" onChange={onchange} required/>
                       </div>
                       <div className="form-item">
                           <TextField name="country" variant="outlined" fullWidth="100%"  label="Country" onChange={onchange} required/>
                       </div>
                       <div className="form-item">
                           <TextField name="city" variant="outlined"  fullWidth="100%" label="City" onChange={onchange} required/>
                       </div>
                       <div className="form-item">
                           <TextField name="address" variant="outlined" fullWidth="100%"  label="Address" onChange={onchange} required/>
                       </div>
                       <div className="form-item">
                           <TextField name="postalCode" variant="outlined" fullWidth="100%" label="Postal Code" onChange={onchange} required/>
                       </div>
                       <div className="form-item">
                           <TextField name="contact" variant="outlined" fullWidth="100%" label="Contact number" onChange={onchange} required/>
                       </div>
                           <input type="hidden" name="userId"  value={user.result._id}  defaultValue={onchange} required/>
                           <input type="hidden"  name="items" value={getCartCount()}     defaultValue={onchange} required/>
                           <input type="hidden"  name="amount" value={getCartSubTotal().toFixed(2)}   fullWidth="100%"   onChange={onchange}/>
                       <div className="submit-wrap">
                           <Button variant="contained" color="secondary" type="submit"  onClick={onSubmit}>Proceed To checkout</Button>
                       </div>
                      </form>
               </div>
                <div className="right-content">
                    <div className="cartScreenRight">
                        <div className="cartScreenInfo">
                            <p>Total cart items: {getCartCount()} </p>
                            <p>Total payment: ${getCartSubTotal().toFixed(2)}</p>
                        </div>

                    </div>

                </div>


            </Paper>

        </Container>
    )
};

export default DeliveryServiceScreen