import './Navbar.css';
import {Link} from 'react-router-dom'
import {useSelector} from "react-redux";

const Navbar = () =>{   const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const user= null;
    const getCartCount = () => {
        return cartItems.reduce((qty,item) => qty = Number(item.qty) + qty,0);
    }

    return (
        <nav className="navbar">
            <ul className="nav_Logo">
                <li><Link to="/">Shopping Platform</Link></li>
            </ul>
            <ul className="nav_links">
               <li>
                   {user?(
                       <div className="userPro">
                           <Link to="/signin">{user}</Link>
                           <div className="avartar">{user.charAt(0)}</div>
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

               </li>


                <li>
                    <Link to="/seller">Sellers</Link>
                </li>
                <li>
                    <Link to="/cart" className="cart_Link">
                        <i className="fas fa-shopping-cart"> </i>
                        <span>
                            <span className="cartLogo_Batch">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar