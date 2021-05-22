import './Navbar.css';
import {Link, Route} from 'react-router-dom'
import {useSelector} from "react-redux";
import Search from '../components/Search'

const Navbar = () =>{
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty,item) => qty = Number(item.qty) + qty,0);
    }

    return (
        <nav className="navbar">
            <ul className="nav_Logo">
                <li><Link to="/">Shopping Platform</Link></li>
            </ul>
            <ul className="search">
                <li>
                    <Route render={({ history }) => (
                        <Search history={history}></Search>
                    )}
                    ></Route>
                </li>
            </ul>
            <ul className="nav_links">

                <li>
                    <Link to="/signin">Sign in</Link>
                </li>
                <li>
                    <Link to="/signup">Sign up</Link>
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