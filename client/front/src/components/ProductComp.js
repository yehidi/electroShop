import React, { Component } from "react"
import {Link} from 'react-router-dom'
require('dotenv').config();

export default function ProductComp({name, price, productId, imageUrl}){
    
        return (
                <div className="col-md-3 col-sm-6">
                  <div className="single-shop-product">
                    <div className="product-upper">
                    <Link to={`/products/${productId}`}><img src={imageUrl} alt={name} width={262.5} height={335.75} /></Link>
                    </div>
                    <h2><Link to={`/products/${productId}`}>{name}</Link></h2>
                    <div className="product-carousel-price">
                      <ins>${price}</ins> <del>$999.00</del>
                    </div>  
                    <div className="product-option-shop">
                      <Link to={`/products/${productId}`} className="add_to_cart_button">View</Link>
                    </div>                       
                  </div>
                </div>
        )
    }