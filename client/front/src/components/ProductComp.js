import React, { Component } from "react"
import {Link} from 'react-router-dom'
require('dotenv').config();

//fetch(process.env.MONGO_URI
class ProductComp extends React.Component{
    render() {
        return (
                <div className="col-md-3 col-sm-6">
                  <div className="single-shop-product">
                    <div className="product-upper">
                      <img src="img/product-2.jpg" alt="" />
                    </div>
                    <h2><a href>MACBOOK</a></h2>
                    <div className="product-carousel-price">
                      <ins>$899.00</ins> <del>$999.00</del>
                    </div>  
                    <div className="product-option-shop">
                      <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={70} rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
                    </div>                       
                  </div>
                  {/* <Link to={`/product/${1111}`} className="infoButton">BLABLA</Link> */}
                </div>
        )
    }
}

export default ProductComp