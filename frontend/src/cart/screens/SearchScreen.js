import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProducts } from '../functions/actions/productActions';
import Product from '../components/Product';
import Search from "../components/Search";

const SearchScreen= (props) =>{
    const {name = 'all', category = 'all', pageNumber = 1} = useParams();
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages } = productList;
    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList;
    useEffect(() => {
        dispatch(
            getProducts({
                pageNumber,
                name: name !== 'all' ? name : '',
                category: category !== 'all' ? category : '',
            })
        );
    },[category, dispatch, name, pageNumber]);

    const getFilterUrl = (filter) => {
        const filterPage = filter.page || pageNumber;
        const filterCategory = filter.category || category;
        const filterName = filter.name || name;
        return `/search/category/${filterCategory}/name/${filterName}/pageNumber/${filterPage}`;
    };
    return (
        <div>
            <div className="row">
                {loading ? (
                    <h1 className= "txt-main">Loading...</h1>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    <div>{products.length} Results</div>
                )}
            </div>
            <div className="row top">
                <div className="col-1">
                    <div>
                        {loadingCategories ? (
                            <h1 className= "txt-main">Loading...</h1>
                        ) : errorCategories ? (
                            <h2>{error}</h2>
                        ) : (
                            <ul>
                                <li>
                                    <Link
                                        className={'all' === category ? 'active' : ''}
                                        to={getFilterUrl({ category: 'all' })}
                                    >
                                        Any
                                    </Link>
                                </li>
                                {categories.map((c) => (
                                    <li key={c}>
                                        <Link
                                            className={c === category ? 'active' : ''}
                                            to={getFilterUrl({ category: c })}
                                        >
                                            {c}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="col-3">
                    {loading ? (
                        <h1 className= "txt-main">Loading...</h1>
                    ) : error ? (
                        <h2>{error}</h2>
                    ) : (
                        <>
                            {products.length === 0 && (
                                <h2>No Product Found</h2>
                            )}
                            <div className="row center">
                                {products.map((product) => (
                                    <Product key={product._id} product={product}></Product>
                                ))}
                            </div>
                            <div className="row center pagination">
                                {[...Array(pages).keys()].map((x) => (
                                    <Link
                                        className={x + 1 === page ? 'active' : ''}
                                        key={x + 1}
                                        to={getFilterUrl({ page: x + 1 })}
                                    >
                                        {x + 1}
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchScreen;