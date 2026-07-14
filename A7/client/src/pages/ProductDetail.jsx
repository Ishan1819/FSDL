import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../api.js";
import { useCart } from "../CartContext.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    getProduct(id)
      .then(setProduct)
      .catch(() => setError("Product not found."));
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <span className="category-tag">{product.category}</span>
        <h1>{product.name}</h1>
        <p className="rating">⭐ {product.rating} rating</p>
        <p className="price">₹{product.price}</p>
        <p className="stock">
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </p>
        <p>{product.description}</p>

        <div className="qty-row">
          <label>Qty:</label>
          <input
            type="number"
            min="1"
            max={product.stock}
            value={qty}
            onChange={(e) => {
              const value = Number(e.target.value);
              const clamped = Math.min(Math.max(value || 1, 1), product.stock);
              setQty(clamped);
            }}
          />
        </div>

        <div className="actions">
          <button
            disabled={product.stock === 0}
            onClick={() => addToCart(product, qty)}
          >
            Add to Cart
          </button>
          <button
            className="secondary"
            disabled={product.stock === 0}
            onClick={() => {
              addToCart(product, qty);
              navigate("/cart");
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
