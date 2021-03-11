import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar__links">
        <li><Link to="/" className="cart__link">Home</Link></li>
        <li><Link to="/shop" className="cart__link">Shop</Link></li>
        <li><Link to="/products/" className="cart__link">Single Product</Link></li>
        <li><Link to="/about" className="cart__link">About</Link></li>
      </div>

      <ul className="navbar__links">
        <li><Link to="/cart" className="cart__link">CART</Link></li>
      </ul>
    </nav>
  );
};