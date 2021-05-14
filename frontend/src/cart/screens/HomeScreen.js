import './HomeScreen.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Product from "../components/Product";
import { getProducts as listProducts } from "../functions/actions/productActions";

const HomeScreen = () =>{
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <div className="homeScreen">
            <h2 className="mainTitle">Latest Products</h2>
            <div className="homeScreenProducts">
                {loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    products.map((product) => (
                        <Product
                            key={product._id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            category={product.category}
                            image={product.image}
                            id={product._id}

                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default HomeScreen