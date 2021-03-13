import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import CartItem from '../components/CartItem';

export default function Cart(props) {

const product_id=window.location.pathname.split('/')[2];
const qty = props.location.search? Number(props.location.search.split('=')[1])
: 1;

const cart = useSelector((state) => state.cart);
const {cartItems} = cart;

const dispatch = useDispatch();
useEffect(() => {
  if (product_id) {
    dispatch(addToCart(product_id, qty));
  }
}, [])

const getCartCount = () => {
  return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
};

const getCartSubTotal = () => {
  return cartItems
    .reduce((price, item) => price + item.price * item.qty, 0)
    .toFixed(2);
};

const qtyChangeHandler = (id, qty) => {
  dispatch(addToCart(id, qty));
};

const removeFromCartHandler = (id) => {
  dispatch(removeFromCart(id));
};

const checkoutHandler = () => {
  props.history.push('/signin?redirect=orders');
}
return (
        <div>
                  <div className="product-big-title-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="product-bit-title text-center">
                  <h2>Cart</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-sidebar">
                <h2 className="sidebar-title">Search Products</h2>
                <form action="#">
                  <input type="text" placeholder="Search products..." />
                  <input type="submit" defaultValue="Search" />
                </form>
              </div>
              <div className="single-sidebar">
                <h2 className="sidebar-title">Products</h2>
                <div className="thubmnail-recent">
                  <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
                  <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$800.00</del>
                  </div>                             
                </div>
                <div className="thubmnail-recent">
                  <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
                  <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$800.00</del>
                  </div>                             
                </div>
                <div className="thubmnail-recent">
                  <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
                  <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$800.00</del>
                  </div>                             
                </div>
                <div className="thubmnail-recent">
                  <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
                  <h2><a href="single-product.html">Sony Smart TV - 2015</a></h2>
                  <div className="product-sidebar-price">
                    <ins>$700.00</ins> <del>$800.00</del>
                  </div>                             
                </div>
              </div>
              <div className="single-sidebar">
                <h2 className="sidebar-title">Recent Posts</h2>
                <ul>
                  <li><a href="#">Sony Smart TV - 2015</a></li>
                  <li><a href="#">Sony Smart TV - 2015</a></li>
                  <li><a href="#">Sony Smart TV - 2015</a></li>
                  <li><a href="#">Sony Smart TV - 2015</a></li>
                  <li><a href="#">Sony Smart TV - 2015</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="product-content-right">
                <div className="woocommerce">
                  <form method="post" action="#">
                    <table cellSpacing={0} className="shop_table cart">
                      <thead>
                        <tr>
                          <th className="product-remove">&nbsp;</th>
                          <th className="product-thumbnail">&nbsp;</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                        </tr>
                      </thead>
                      <tbody>
            {
            cartItems.length === 0 ? (
              <div>
                 Your Cart Is Empty, <Link to="/shop">Go Back</Link>
              </div>
             ) : ( 
               cartItems.map((item, key) => 
              <CartItem key={item._id} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeFromCartHandler} />
              )
            )
            }
            
            
                        <tr>
                          <td className="actions" colSpan={6}>
                          <div>
                              <Link to="/orders" onClick={checkoutHandler} disabled={cartItems.length===0}>Proceed to Checkout</Link>
                          </div>
                            {/* <input type="submit" value="Proceed to Checkout" name="proceed" 
                              className="checkout-button button alt wc-forward" onClick={checkoutHandler}
                              disabled={cartItems.length===0} /> */}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                  <div className="cart-collaterals">
                    <div className="cross-sells">
                      <h2>You may be interested in...</h2>
                      <ul className="products">
                        <li className="product">
                          <a href="single-product.html">
                            <img width={325} height={325} alt="T_4_front" className="attachment-shop_catalog wp-post-image" src="img/product-2.jpg" />
                            <h3>Ship Your Idea</h3>
                            <span className="price"><span className="amount">£20.00</span></span>
                          </a>
                          <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={22} rel="nofollow" href="single-product.html">Select options</a>
                        </li>
                        <li className="product">
                          <a href="single-product.html">
                            <img width={325} height={325} alt="T_4_front" className="attachment-shop_catalog wp-post-image" src="img/product-4.jpg" />
                            <h3>Ship Your Idea</h3>
                            <span className="price"><span className="amount">£20.00</span></span>
                          </a>
                          <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={22} rel="nofollow" href="single-product.html">Select options</a>
                        </li>
                      </ul>
                    </div>
                    <div className="cart_totals ">
                      <h2>Cart Totals</h2>
                      <table cellSpacing={0}>
                        <tbody>
                          <tr className="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td><span className="amount">${getCartSubTotal()}</span></td>
                          </tr>
                          <tr className="shipping">
                            <th>Shipping and Handling</th>
                            <td>Free Shipping</td>
                          </tr>
                          <tr className="order-total">
                            <th>Order Total</th>
                            <td><strong><span className="amount">${getCartSubTotal()}</span></strong> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>                        
              </div>                    
            </div>
          </div>
        </div>
      </div>

        </div>
    )
  }