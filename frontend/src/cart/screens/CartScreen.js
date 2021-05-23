import './CartScreen.css';
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";

import CartItems from "../components/CartItems";
import {addToCart, removeFromCart} from "../functions/actions/cartActions";

const CartScreen = () =>{
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    const qtyChangeHandler = (id, qty) =>{
        dispatch(addToCart(id,qty));
    }
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };
    const getCartCount = () => {
        return cartItems.reduce((qty,item) => Number(item.qty) + qty,0)
    };
    const getCartSubTotal = () => {
        return cartItems.reduce((price,item) => (item.price * item.qty) + price,0)
    };
    return (
        <div className="cartScreen">
            <div className="cartScreenLeft">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty... <Link to="/">BACK TO SHOPPING</Link>
                    </div>
                ) : (cartItems.map((item) => (
                    <CartItems
                        key = {item.product}
                        item={item}
                        qtyChangeHandler={qtyChangeHandler}
                        removeHandler={removeFromCartHandler}/>
                )))}
            </div>
            <div className="cartScreenRight">
                <div className="cartScreenInfo">
                    <p>You have {getCartCount()} items in cart</p>
                    <p>Total: ${getCartSubTotal().toFixed(2)}</p>
                </div>
                <div>
                    <Link to="/checkout">
                        <button>Proceed To checkout</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default CartScreen
