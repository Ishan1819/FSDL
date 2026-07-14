// ============================================================
// [MODIFIED] Navbar.jsx
// Added: setPage prop for About Us / Contact navigation,
//        active state highlight on nav links.
// ============================================================
import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

function Navbar({ setPage, activePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const { wishlistCount, toggleWishlist } = useWishlist();
  const { user, logout } = useAuth();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const initial = user?.username?.[0]?.toUpperCase() ?? "?";



  return (
    <nav className={`navbar ${scrolled || activePage !== 'home' ? "navbar-scrolled" : ""}`}>
      {/* Left spacer */}
      <div className="nav-left"></div>

      {/* Center logo → always goes home */}
      <div className="nav-center">
        <span className="logo" onClick={() => setPage("home")}>B I U S</span>
      </div>

      {/* Right menu */}
      <div className="nav-right">
        {/* [UPDATED] About Us → sets page to 'about' */}
        <button
          className={`nav-link-btn ${activePage === 'about' ? 'nav-link-active' : ''}`}
          onClick={() => setPage("about")}
        >About Us</button>

        {/* [UPDATED] Contact → sets page to 'contact' */}
        <button
          className={`nav-link-btn ${activePage === 'contact' ? 'nav-link-active' : ''}`}
          onClick={() => setPage("contact")}
        >Contact</button>

        {/* User icon dropdown */}
        <div className="user-icon-wrap" ref={menuRef}>
          <div
            className="user-icon"
            onClick={() => setUserMenuOpen((p) => !p)}
            title={user?.username}
          >
            {initial}
          </div>
          {userMenuOpen && (
            <div className="user-dropdown">
              <div className="user-dropdown-name">
                Signed in as<br /><strong>{user?.username}</strong>
              </div>
              <button
                className="user-dropdown-signout"
                onClick={() => { setUserMenuOpen(false); logout(); }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>

        {/* Wishlist */}
        <button className="nav-wishlist-btn" onClick={toggleWishlist}>
          ♡ Wishlist ({wishlistCount})
        </button>

        {/* Cart */}
        <button className="nav-cart-btn" onClick={toggleCart}>
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
