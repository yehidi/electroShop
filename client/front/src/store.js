import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducer } from './reducers/cartReducers'
import {
    getProductDetailsReducer,
    getProductsReducer,
} from "./reducers/productReducers";
import { userRegisterReducer, userSigninReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
});

const middleware = [thunk];

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  },
  cart: {
    cartItems: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []
  },
};

const store = createStore(
    reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default store;