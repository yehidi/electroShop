import axios from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (product_id, qty) => async(dispatch, getState) => {

    const {data} = await axios.get(`/api/products/${product_id}`);
    dispatch ({
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}