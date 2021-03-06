import axios from "axios"
import * as actionTypes from "../constants/cartConstants";

export const addToCart = (id, qty) => async(dispatch, getState) => {

    const {data} = await axios.get(`/api/products/${id}`);
    dispatch ({
        type: actionTypes.CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            _id: data._id,
            qty,
        }
    })
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: actionTypes.CART_REMOVE_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  };