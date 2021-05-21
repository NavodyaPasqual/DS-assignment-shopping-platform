import './Navbar.css';
import {useSelector} from "react-redux";
import {AppBar,Avatar,Typography,Toolbar,Button} from "@material-ui/core";
import React,{useState,useEffect} from "react";
import navStyle from "../../user/style/navStyle";
import {useDispatch} from "react-redux";
import {useHistory,useLocation ,Link} from "react-router-dom";
import authReducer from "../../user/reducers/auth";

const Navbar = () =>{   const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const classes = navStyle();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const localUser = JSON.parse(localStorage.getItem('UserProfile')) || {};
    let [user,setUser] = useState(localUser);


    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('UserProfile')));

    },[location]);
    console.log("data " +user);
    const getCartCount = () => {
        return cartItems.reduce((qty,item) => qty = Number(item.qty) + qty,0);
    }

    const logOut=()=>{
        authReducer({type:'LOGOUT'});
        history.push('/signin');
    }
    return (
        <AppBar className={classes.appBar} color="inherit">
            <Typography component={Link} className="nav_Logo"  to="/" variant="h5">

                Shopping Platform
            </Typography>

                <Toolbar className={classes.toolbar}>

                            {user?(

                                 <div className={classes.profile}>
                                     <Avatar className={classes.purple} alt={user.result.givenName} src={user.result.imageURL}>{user.result.name.charAt(0)}</Avatar>
                                     <Typography className={classes.userName} variant="h8"> {user.result.name}</Typography>
                                     <Button component={Link} to="/seller" className={classes.navBtn}>
                                         Sellers
                                     </Button>
                                    <div className="cart_Link">
                                         <Link to="/cart" >
                                             <i className="fas fa-shopping-cart"> </i>
                                             <span className="cartLogo_Batch">{getCartCount()}</span>
                                         </Link>
                                     </div>
                                     <Button  className={classes.logout} onClick={logOut}><i className="fas fa-power-off"> </i></Button>
                                 </div>

                            ):(
                                <div>
                                    <Button component={Link} to="/signin" className={classes.navLogin} variant="contained"  >
                                        Sign in
                                    </Button>
                                </div>
                            )}







                </Toolbar>
        </AppBar>
    )
}

export default Navbar