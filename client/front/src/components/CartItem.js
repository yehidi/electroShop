import React from 'react'
import { Link } from 'react-router-dom'

export default function CartItem({item, qtyChangeHandler, removeHandler }) {

    return (
        <tr className="cart_item">
        <td className="product-remove">
          <a title="Remove this item" className="remove" onClick={() => removeHandler(item.product)}><Link>×</Link></a> 
        </td>
        <td className="product-thumbnail">
          <Link to={`/products/${item.product}`}><img width={145} height={145} alt="poster_1_up" className="shop_thumbnail" src={item.imageUrl} /></Link>
        </td>
        <td className="product-name">
        <Link to={`/products/${item.product}`}>{item.name}</Link> 
        </td>
        <td className="product-price">
          <span className="amount">${item.price}</span> 
        </td>
        <td className="product-quantity">
          
          <select
            value={item.qty}
            onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
          >
            {[...Array(item.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
             </option>
        ))}
          </select>

        </td>
        <td className="product-subtotal">
          <span className="amount">${item.price*item.qty}</span> 
        </td>
      </tr>
    )
}