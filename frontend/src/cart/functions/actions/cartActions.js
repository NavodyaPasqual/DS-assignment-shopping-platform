import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch,getState) => {
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const saveMethod = (data) => (dispatch) => {
    dispatch({
        type: actionTypes.SAVE_PAYMENT_METHOD,
        payload:data,
    });
};
