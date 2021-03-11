import React, { Component } from "react"
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import Navbar from './Navbar';

export default function Header() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  
        return (
            <div>
              <div className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="user-menu">
              <ul>
                <li><a href="#"><i className="fa fa-user" /> My Account</a></li>
                <li><a href="cart.html"><i className="fa fa-user" /> My Cart</a></li>
                <li><a href="checkout.html"><i className="fa fa-user" /> Checkout</a></li>
                <li><Link to="/signin"><i className="fa fa-user" /> Login</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="header-right">
              <ul className="list-unstyled list-inline">
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> {/* End header area */}
                <div className="site-branding-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="logo">
              <h1><Link to="/">electro<span>Shop</span></Link></h1>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="shopping-item">
              <Link to="/cart">Cart - 
              {cartItems.length > 0 && (
                <span className="product-count">{cartItems.length}</span>
              )}
              <span className="cart-amunt">$800</span>
              <i className="fa fa-shopping-cart" />
              
              
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div> {/* End site branding area */}
    <div className="mainmenu-area">
      <div className="container">
        <div className="row">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div> 
          
        </div>
        
      </div>
      <Navbar />
    </div> {/* End mainmenu area */}
            </div>
        )
    }