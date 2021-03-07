import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductHome({name, price, id, imageUrl}) {
    return (
    
        <div className="single-product">
                      <div className="product-f-image">
                        <img src={imageUrl} alt={name} />
                        <div className="product-hover">
                          <Link to={'/products/'+ id} className="add-to-cart-link"><i className="fa fa-shopping-cart" /> Add to cart</Link>
                          <Link to={'/products/'+ id} className="view-details-link"><i className="fa fa-link" /> See details</Link>
                        </div>
                      </div>
                      <h2><Link to={'/products/'+ id}>{name}</Link></h2>
                      <div className="product-carousel-price">
                        <ins>${price}</ins> <del>$999.00</del>
                      </div> 
                    </div>
     
    )
}