import React, {Component, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { createOrder } from '../actions/orderActions';
import CartItem from '../components/CartItem';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'

export default function OrderDetails(props) {
    const cart = useSelector((state) => state.cart);
    
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

    if (!userInfo){
        props.history.push('/signin')
    }
    const orderCreate = useSelector(state => state.orderCreate);
    const {loading, success, error, order} = orderCreate;

    const dispatch = useDispatch();
    const placeOrderHandler = () => {
        dispatch(createOrder({...cart, orderItems: cart.cartItems }))
    };

    useEffect(() =>{
        if (success) {
            props.history.push(`/order/${order._id}`);
            dispatch({type: ORDER_CREATE_RESET});
        }
    }, [dispatch, order, props.history, success]);

       return ( 
        <div>
            <h4>ORDER DETAILS</h4>
            { 
               cart.cartItems.map((item, key) => (
                  <CartItem key={item._id} item={item} />
              ))
            }

<button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  disabled={cart.cartItems.length === 0}
                >
                  Place Order
                </button>

                {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
        </div>
    )
  }