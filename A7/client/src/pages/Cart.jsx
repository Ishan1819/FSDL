import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext.jsx";

export default function Cart() {
  const { items, updateQty, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div>
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="cart-product">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </td>
              <td>₹{item.price}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) => updateQty(item.id, Number(e.target.value))}
                />
              </td>
              <td>₹{item.price * item.qty}</td>
              <td>
                <button
                  className="link-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <h2>Total: ₹{totalPrice}</h2>
        <button onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
