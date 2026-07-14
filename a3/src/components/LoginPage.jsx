// ============================================================
// [NEW] LoginPage.jsx — Login screen shown before the app
// Any non-empty username + password is accepted.
// ============================================================
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

function LoginPage() {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (!username.trim() || !password.trim()) {
            setError('Please enter both username and password.');
            return;
        }
        setLoading(true);
        // Simulate a brief login delay for UX
        setTimeout(() => {
            const ok = login(username, password);
            if (!ok) setError('Invalid credentials.');
            setLoading(false);
        }, 600);
    };

    return (
        <div className="login-page">
            {/* Left panel — branding */}
            <div className="login-brand">
                <div className="login-brand-inner">
                    <span className="login-logo">B I U S</span>
                    <p className="login-tagline">
                        A refined balance of heritage &amp; modernity.<br />
                        Designed for those who define luxury on their own terms.
                    </p>
                </div>
            </div>

            {/* Right panel — form */}
            <div className="login-form-panel">
                <div className="login-form-inner">
                    <h2 className="login-title">Welcome Back</h2>
                    <p className="login-subtitle">Sign in to continue</p>

                    <form className="login-form" onSubmit={handleSubmit} noValidate>
                        <div className="login-field">
                            <label htmlFor="login-username">Username</label>
                            <input
                                id="login-username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                autoComplete="username"
                            />
                        </div>

                        <div className="login-field">
                            <label htmlFor="login-password">Password</label>
                            <input
                                id="login-password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                autoComplete="current-password"
                            />
                        </div>

                        {error && <p className="login-error">{error}</p>}

                        <button type="submit" className="login-btn" disabled={loading}>
                            {loading ? 'Signing in…' : 'Sign In'}
                        </button>
                    </form>

                    <p className="login-hint">Any username &amp; password will work to sign in.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
