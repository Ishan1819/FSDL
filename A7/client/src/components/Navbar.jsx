import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext.jsx";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        ShopKart
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">
          Cart
          {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </Link>
      </nav>
    </header>
  );
}
