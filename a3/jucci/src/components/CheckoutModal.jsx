// ============================================================
// [NEW] CheckoutModal.jsx — Feature: Checkout Flow (Buy Now)
// Multi-step modal: Delivery Details → Payment → Confirmation
// No actual payment gateway is called.
// ============================================================
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './CheckoutModal.css';

const PAYMENT_METHODS = [
    { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
    { id: 'paypal', label: 'PayPal', icon: '🅿️' },
    { id: 'bius_pay', label: 'BIUS Pay', icon: '💳' },
    { id: 'bius_wallet', label: 'BIUS Wallet', icon: '👜' },
];

const INITIAL_FORM = {
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
};

function CheckoutModal({ isOpen, onClose }) {
    const { cart, cartTotal, clearCart } = useCart();
    const [step, setStep] = useState(0); // 0=delivery, 1=payment, 2=confirmation
    const [form, setForm] = useState(INITIAL_FORM);
    const [errors, setErrors] = useState({});
    const [selectedPayment, setSelectedPayment] = useState('cod');

    if (!isOpen) return null;

    // ---- Validation ----
    const validate = () => {
        const newErrors = {};
        if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!/^\d{10}$/.test(form.phone)) newErrors.phone = 'Enter a valid 10-digit phone number';
        if (!form.address.trim()) newErrors.address = 'Delivery address is required';
        if (!form.city.trim()) newErrors.city = 'City is required';
        if (!form.state.trim()) newErrors.state = 'State is required';
        if (!/^\d{6}$/.test(form.pinCode)) newErrors.pinCode = 'Enter a valid 6-digit PIN code';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleContinue = () => {
        if (step === 0 && !validate()) return;
        setStep((prev) => prev + 1);
    };

    const handlePlaceOrder = () => {
        setStep(2); // confirmation step
        clearCart();
    };

    const handleClose = () => {
        setStep(0);
        setForm(INITIAL_FORM);
        setErrors({});
        setSelectedPayment('cod');
        onClose();
    };

    return (
        <div className="checkout-overlay" onClick={handleClose}>
            <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>

                {/* Header */}
                <div className="checkout-header">
                    <h2>
                        {step === 0 && 'Delivery Details'}
                        {step === 1 && 'Payment Method'}
                        {step === 2 && 'Order Confirmed'}
                    </h2>
                    <button className="checkout-close-btn" onClick={handleClose}>&times;</button>
                </div>

                {/* Step Indicators */}
                {step < 2 && (
                    <div className="checkout-steps">
                        {['Delivery', 'Payment'].map((label, i) => (
                            <div key={label} className={`step-pill ${i <= step ? 'step-pill--active' : ''}`}>
                                <span className="step-no">{i + 1}</span>
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* ---- Step 0: Delivery Details ---- */}
                {step === 0 && (
                    <div className="checkout-body">
                        <div className="form-grid">

                            {/* LEFT: Full Name */}
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    name="fullName"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    placeholder="e.g. John Doe"
                                />
                                {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                            </div>

                            {/* RIGHT: Phone */}
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="10-digit mobile number"
                                    maxLength={10}
                                />
                                {errors.phone && <span className="field-error">{errors.phone}</span>}
                            </div>

                            {/* FULL WIDTH: Address */}
                            <div className="form-group col-span-2">
                                <label>Delivery Address</label>
                                <input
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    placeholder="House / Flat No., Street, Locality"
                                />
                                {errors.address && <span className="field-error">{errors.address}</span>}
                            </div>

                            {/* LEFT: City */}
                            <div className="form-group">
                                <label>City</label>
                                <input name="city" value={form.city} onChange={handleChange} placeholder="City" />
                                {errors.city && <span className="field-error">{errors.city}</span>}
                            </div>

                            {/* RIGHT: State */}
                            <div className="form-group">
                                <label>State</label>
                                <input name="state" value={form.state} onChange={handleChange} placeholder="State" />
                                {errors.state && <span className="field-error">{errors.state}</span>}
                            </div>

                            {/* LEFT: PIN Code */}
                            <div className="form-group">
                                <label>PIN Code</label>
                                <input
                                    name="pinCode"
                                    value={form.pinCode}
                                    onChange={handleChange}
                                    placeholder="6-digit PIN"
                                    maxLength={6}
                                />
                                {errors.pinCode && <span className="field-error">{errors.pinCode}</span>}
                            </div>

                            {/* RIGHT: Order summary */}
                            <div className="checkout-order-summary">
                                <span>Items: {cart.reduce((a, i) => a + i.quantity, 0)}</span>
                                <span className="summary-total">Total: <strong>${cartTotal.toFixed(2)}</strong></span>
                            </div>

                        </div>

                        <button className="checkout-action-btn" onClick={handleContinue}>
                            Continue to Payment
                        </button>
                    </div>
                )}


                {/* ---- Step 1: Payment Method ---- */}
                {step === 1 && (
                    <div className="checkout-body">
                        <p className="payment-subtitle">Select your preferred payment method</p>
                        <div className="payment-options">
                            {PAYMENT_METHODS.map((method) => (
                                <label
                                    key={method.id}
                                    className={`payment-option ${selectedPayment === method.id ? 'payment-option--selected' : ''}`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        value={method.id}
                                        checked={selectedPayment === method.id}
                                        onChange={() => setSelectedPayment(method.id)}
                                    />
                                    <span className="payment-icon">{method.icon}</span>
                                    <span className="payment-label">{method.label}</span>
                                    {selectedPayment === method.id && <span className="payment-check">✓</span>}
                                </label>
                            ))}
                        </div>

                        <div className="checkout-security-note">
                            🔒 Your payment information is secure. No charges will be made at this step.
                        </div>

                        <div className="checkout-actions-row">
                            <button className="checkout-back-btn" onClick={() => setStep(0)}>← Back</button>
                            <button className="checkout-action-btn" onClick={handlePlaceOrder}>
                                Place Order
                            </button>
                        </div>
                    </div>
                )}

                {/* ---- Step 2: Confirmation ---- */}
                {step === 2 && (
                    <div className="checkout-body checkout-confirmation">
                        <div className="confirm-icon">✅</div>
                        <h3>Thank you for your order!</h3>
                        <p className="confirm-message">
                            Order placed successfully. Payment will be processed securely during checkout.
                        </p>
                        <div className="confirm-details">
                            <p><strong>Name:</strong> {form.fullName}</p>
                            <p><strong>Phone:</strong> {form.phone}</p>
                            <p><strong>Address:</strong> {form.address}, {form.city}, {form.state} — {form.pinCode}</p>
                            <p><strong>Payment:</strong> {PAYMENT_METHODS.find(m => m.id === selectedPayment)?.label}</p>
                        </div>
                        <button className="checkout-action-btn" onClick={handleClose}>
                            Continue Shopping
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}

export default CheckoutModal;
