import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function OrderSuccess() {
  const { state } = useLocation();
  const order = state?.order;

  if (!order) {
    return (
      <div>
        <p>No recent order found.</p>
        <Link to="/">Go home</Link>
      </div>
    );
  }

  return (
    <div className="order-success">
      <h1>Order Placed!</h1>
      <p>Thanks {order.customer.name}, your order has been confirmed.</p>
      <p>
        <strong>Order ID:</strong> #{order.orderId}
      </p>
      <p>
        <strong>Total:</strong> ₹{order.total}
      </p>
      <p>
        <strong>Status:</strong> {order.status}
      </p>
      <Link to="/">Continue Shopping</Link>
    </div>
  );
}
