import './CartItems.css';
import { Link } from "react-router-dom";

const CartItems = ({item, qtyChangeHandler,removeHandler}) =>{
    return (
        <div className="cartItem">
            <div className="cartItemImage">
                <Link to={`/product/${item.product}`}><img src= {item.image} alt={item.name} /></Link>
            </div>
            <Link to={`/product/${item.product}`} className="cartItemsName">
                <p>{item.name}</p>
            </Link>
            <p className="cartItemPrice">${item.price}</p>
            <select className="cartItemSelect" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map(x => (
                    <option key={x+1} value = {x+1}>{x+1}</option>
                ))}
            </select>
            <button className="cartItemDelete" onClick={() => removeHandler(item.product)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItems