import {Link} from "react-router-dom";
import "../style/dilivaryStyle.css"
import {Container,Paper,Radio,TextField,FormControlLabel,RadioGroup,Typography} from "@material-ui/core"
import dilivary from"../style/dilivary";
import React from "react";
import {useSelector} from "react-redux";
import CartItems from "../../cart/components/CartItems";


const DeliveryServiceScreen = () =>{
    const classes = dilivary;
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const handleChange= ()=>{

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
                           <TextField name="name"  variant="outlined" fullWidth="100%" label="Full name"></TextField>
                       </div>
                       <div className="form-item">
                           <TextField name="country" variant="outlined" fullWidth="100%"  label="Country"></TextField>
                       </div>
                       <div className="form-item">
                           <TextField name="city" variant="outlined"  fullWidth="100%" label="City"></TextField>
                       </div>
                       <div className="form-item">
                           <TextField name="address" variant="outlined" fullWidth="100%"  label="Address"></TextField>
                       </div>
                       <div className="form-item">
                           <TextField name="postalCode" variant="outlined" fullWidth="100%" label="Postal Code"></TextField>
                       </div>
                       <div className="form-item">
                           <TextField name="contact" variant="outlined" fullWidth="100%" label="Contact number"></TextField>
                       </div>
                   </form>
               </div>
                <div className="right-content">
                    <div className="cartScreenRight">
                        <div className="cartScreenInfo">
                            <p>Total cart items: {getCartCount()} </p>
                            <p>Total payment: ${getCartSubTotal().toFixed(2)}</p>
                        </div>
                        <div>
                            <Link to="/payment">
                                <button>Proceed To checkout</button>
                            </Link>
                        </div>
                    </div>

                </div>


            </Paper>

        </Container>
    )
};

export default DeliveryServiceScreen