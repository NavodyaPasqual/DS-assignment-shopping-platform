import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ image, description, price, name, id }) => {
    return (
        <div className="product">
            <img
                src={image}
                alt={name} />

            <div className="productInfo">
                <p className="infoName">{name}</p>
                <p className="infoPrice">${price}</p>
                <p className="infoDescription">
                    {description.substring(0, 100)}...</p>

                <Link to={`/product/${id}`} className="infoButton">
                    View
                </Link>
            </div>
        </div>
    );
};

export default Product;