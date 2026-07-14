import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <span className="category-tag">{product.category}</span>
        <Link to={`/product/${product.id}`} className="card-title">
          {product.name}
        </Link>
        <p className="rating">⭐ {product.rating}</p>
        <p className="price">₹{product.price}</p>
        <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
      </div>
    </div>
  );
}
