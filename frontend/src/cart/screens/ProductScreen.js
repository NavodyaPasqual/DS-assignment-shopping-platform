import './ProductScreen.css';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductDetails } from "../functions/actions/productActions"
import { addToCart } from "../functions/actions/cartActions"

const ProductScreen = ({match, history}) =>{
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const  productDetails = useSelector(state => state.getProductDetails);
    const {loading, error, product} = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id,qty));
        history.push("/cart");
    };

    return (
        <div className="productScreen">
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className="productScreenLeft">
                        <div className="leftImage">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="leftInfo">
                            <p className="leftName">{product.name}</p>
                            <p className="leftPrice">Price: ${product.price}</p>
                            <p className="leftDescription">Description: <br/><br/>{product.description}</p>
                        </div>
                    </div>
                    <div className="productScreenRight">
                        <div className="rightInfo">
                            <p>
                                Price: <span>${product.price}</span>
                            </p>
                            <p>
                                Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of stock"}</span>
                            </p>
                            <p>
                                Qty :
                                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map((x) =>(
                                        <option key={x+1} value={x+1}>{x+1}</option>

                                    ))}

                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}>Add to cart</button>
                            </p>
                        </div>
                        <div className="rightImage">

                        </div>
                    </div>
                </>
                )}

        </div>

    )
}

export default ProductScreen