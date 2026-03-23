// ============================================================
// [MODIFIED] CartModal.jsx — Feature: Checkout Flow (Buy Now)
// Added: useState for checkout modal, "Buy Now" button,
// CheckoutModal component import and rendering.
// ============================================================
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CheckoutModal from './CheckoutModal'; // [NEW] Checkout flow
import './CartModal.css';

function CartModal() {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useCart();
    // [NEW] Checkout modal state
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    if (!isCartOpen) return null;

    // [NEW] Open checkout modal, close cart sidebar
    const handleBuyNow = () => {
        toggleCart();
        setIsCheckoutOpen(true);
    };

    return (
        <>
            <div className="cart-overlay" onClick={toggleCart}>
                <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
                    <div className="cart-header">
                        <h2>Your Cart</h2>
                        <button className="close-btn" onClick={toggleCart}>&times;</button>
                    </div>

                    <div className="cart-items">
                        {cart.length === 0 ? (
                            <p className="empty-cart-msg">Your cart is empty.</p>
                        ) : (
                            cart.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="cart-item-info">
                                        <h4>{item.name}</h4>
                                        <p>${item.price}</p>
                                        <div className="quantity-controls">
                                            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                        </div>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total:</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        {/* [NEW] Buy Now button triggers checkout flow */}
                        {cart.length > 0 && (
                            <button className="buy-now-btn" onClick={handleBuyNow}>
                                Buy Now
                            </button>
                        )}
                        <button className="checkout-btn">Save for Later</button>
                    </div>
                </div>
            </div>

            {/* [NEW] Checkout modal rendered outside cart sidebar */}
            <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
            />
        </>
    );
}

export default CartModal;
