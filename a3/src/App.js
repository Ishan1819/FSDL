// ============================================================
// [MODIFIED] App.js
// Added: page state for About Us / Contact Us routing.
//        About & Contact rendered as sections below main content.
// ============================================================
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import CartModal from './components/CartModal';
import WishlistModal from './components/WishlistModal';
import LoginPage from './components/LoginPage';
import RecommendedSections from './components/RecommendedSections'; // [NEW]
import AboutUs from './components/AboutUs';                         // [NEW]
import ContactUs from './components/ContactUs';                     // [NEW]

// page values: 'home' | 'about' | 'contact'
function AppShell() {
  const { user } = useAuth();
  const [page, setPage] = useState('home');

  if (!user) return <LoginPage />;

  return (
    <WishlistProvider>
      <CartProvider>
        <div className="App">
          <Navbar
            setPage={setPage}
            activePage={page}
          />

          {/* Home page — product grid + recommended sections */}
          {page === 'home' && (
            <>
              <Hero />
              <Collection category="All" />
              <RecommendedSections /> {/* [NEW] */}
            </>
          )}

          {/* [NEW] About Us page */}
          {page === 'about' && <AboutUs />}

          {/* [NEW] Contact Us page */}
          {page === 'contact' && <ContactUs />}

          <CartModal />
          <WishlistModal />
        </div>
      </CartProvider>
    </WishlistProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  );
}

export default App;
