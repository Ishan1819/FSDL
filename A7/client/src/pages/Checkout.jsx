import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext.jsx";
import { placeOrder } from "../api.js";

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", address: "", email: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const order = await placeOrder({ items, customer: form });
      clearCart();
      navigate("/order-success", { state: { order } });
    } catch (err) {
      setError("Could not place order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (items.length === 0) {
    return <p>Your cart is empty. Add items before checking out.</p>;
  }

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Delivery Address
          <textarea
            name="address"
            required
            value={form.address}
            onChange={handleChange}
          />
        </label>

        <h2>Order Total: ₹{totalPrice}</h2>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={submitting}>
          {submitting ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}
