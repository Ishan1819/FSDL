// ============================================================
// [NEW] AuthContext.jsx — Mock Authentication
// Any username + password combination is accepted.
// Stores username in localStorage for persistence.
// ============================================================
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('jucci_user');
        return saved ? JSON.parse(saved) : null;
    });

    // Accept any non-empty username + password
    const login = (username, password) => {
        if (!username.trim() || !password.trim()) return false;
        const userData = { username: username.trim() };
        localStorage.setItem('jucci_user', JSON.stringify(userData));
        setUser(userData);
        return true;
    };

    const logout = () => {
        localStorage.removeItem('jucci_user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
