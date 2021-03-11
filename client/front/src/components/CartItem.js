import React from 'react'

export default function CartItem() {

    return (
        <tr className="cart_item">
        <td className="product-remove">
          <a title="Remove this item" className="remove" href="#">×</a> 
        </td>
        <td className="product-thumbnail">
          <a href="single-product.html"><img width={145} height={145} alt="poster_1_up" className="shop_thumbnail" src="img/product-thumb-2.jpg" /></a>
        </td>
        <td className="product-name">
          <a href="single-product.html">Ship Your Idea</a> 
        </td>
        <td className="product-price">
          <span className="amount">£15.00</span> 
        </td>
        <td className="product-quantity">
          <div className="quantity buttons_added">
            <input type="button" className="minus" defaultValue="-" />
            <input type="number" size={4} className="input-text qty text" title="Qty" defaultValue={1} min={0} step={1} />
            <input type="button" className="plus" defaultValue="+" />
          </div>
        </td>
        <td className="product-subtotal">
          <span className="amount">£15.00</span> 
        </td>
      </tr>
    )
}