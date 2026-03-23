// ============================================================
// [NEW] ContactUs.jsx — Contact form page
// Simple frontend-only form: Name, Email, Message + Submit.
// ============================================================
import { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section className="contact-section">
                <div className="contact-inner container">
                    <div className="contact-success">
                        <span className="contact-success-icon">✉️</span>
                        <h2>Message Received</h2>
                        <p>Thank you, <strong>{form.name}</strong>! We'll get back to you at <strong>{form.email}</strong> shortly.</p>
                        <button className="contact-submit-btn" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}>
                            Send Another
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="contact-section" id="contact-us">
            <div className="contact-inner container">

                <span className="contact-accent">— Get in Touch —</span>
                <h2 className="contact-heading">Contact Us</h2>
                <p className="contact-subtitle">
                    Have a question, feedback, or a styling request? We'd love to hear from you.
                </p>

                <form className="contact-form" onSubmit={handleSubmit} noValidate>

                    {/* Row 1: Name + Email side by side */}
                    <div className="contact-form-row">
                        <div className="contact-field">
                            <label htmlFor="contact-name">Name</label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                required
                            />
                        </div>
                        <div className="contact-field">
                            <label htmlFor="contact-email">Email</label>
                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                    </div>

                    {/* Row 2: Message full width */}
                    <div className="contact-field">
                        <label htmlFor="contact-message">Query / Message</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us what's on your mind…"
                            rows={5}
                            required
                        />
                    </div>

                    <button type="submit" className="contact-submit-btn">
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    );
}

export default ContactUs;
