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

    const logOut=()=>{
        authReducer({type:'LOGOUT'});
        history.push('/signin');
        setUser(null);
    }
    return (
        <AppBar className={classes.appBar} color="inherit">
            <Typography component={Link} className="nav_Logo"  to="/" variant="h5">

                Shopping Platform
            </Typography>

                <Toolbar className={classes.toolbar}>



                    {user?(
                            <div className={classes.profile}>
                                <Button component={Link} to="/" className={classes.navBtn}>
                                    Home
                                </Button>
                                <Button component={Link} to="/seller" className={classes.navBtn}>
                                    Sellers
                                </Button>
                                  <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}></Avatar>
                                <Typography className={classes.userName} variant="h8"> {user.result.name}</Typography>
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
                            <Button component={Link} to="/" className={classes.navBtn}>
                                Home
                            </Button>
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