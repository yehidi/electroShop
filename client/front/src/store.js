import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from './reducers/cartReducers'
import {
    getProductDetailsReducer,
    getProductsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []
  },
};

const store = createStore(
    reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default store;