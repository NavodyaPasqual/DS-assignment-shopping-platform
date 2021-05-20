import './Navbar.css';
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";
import {AppBar,Avatar,Typography,Toolbar,Button} from "@material-ui/core";
import React,{useState} from "react";
import navStyle from "../../user/style/navStyle";

const Navbar = () =>{   const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('UserProfile')));
    console.log(user);
    const classes = navStyle();
    const getCartCount = () => {
        return cartItems.reduce((qty,item) => qty = Number(item.qty) + qty,0);
    }

    return (
        <AppBar className={classes.appBar}>
            <Typography component={Link} className="nav_Logo"  to="/" variant="h5">

                Shopping Platform
            </Typography>

                <Toolbar className={classes.toolbar}>

                            {user?(
                                <div className="userPro">
                                    <Avatar className={classes.purple}>{user.charAt(0)}</Avatar>
                                    <Typography component={Link} to="/signin" className={classes.userName}>{user}</Typography>
                                </div>
                            ):(
                                <div>
                                    <button className="nav-btn">
                                        <Link to="/signin">Sign in</Link>
                                    </button>
                                    <button className="nav-btn">
                                        <Link to="/signup">Sign up</Link>
                                    </button>
                                </div>
                            )}


                        <button className="nav-btn">
                            <Link to="/seller">Sellers</Link>
                        </button>

                        <div>
                            <Link to="/cart" className="cart_Link">
                                <i className="fas fa-shopping-cart"> </i>
                                <span>
                            <span className="cartLogo_Batch">{getCartCount()}</span>
                        </span>
                            </Link>
                        </div>

                </Toolbar>
        </AppBar>
    )
}

export default Navbar