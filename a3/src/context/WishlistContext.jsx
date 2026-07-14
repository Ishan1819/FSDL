// ============================================================
// [NEW] WishlistContext.jsx — Feature: Wishlist
// Separate context for wishlist, fully independent of cart.
// ============================================================
import { createContext, useState, useContext, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('jucci_wishlist');
    if (!saved) return [];
    try {
      return JSON.parse(saved);
    } catch (error) {
      console.error('Failed to parse saved wishlist, resetting to empty wishlist.', error);
      return [];
    }
  });
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('jucci_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev; // prevent duplicates
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInWishlist = (productId) => wishlist.some((item) => item.id === productId);

  const toggleWishlist = () => setIsWishlistOpen((prev) => !prev);

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        isWishlistOpen,
        toggleWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
