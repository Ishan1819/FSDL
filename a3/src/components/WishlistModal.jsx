// ============================================================
// [NEW] WishlistModal.jsx — Feature: Wishlist
// Slide-in modal listing wishlist items. Items can be
// removed or moved to the cart from here.
// ============================================================
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import './WishlistModal.css';

function WishlistModal() {
    const { wishlist, isWishlistOpen, toggleWishlist, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    if (!isWishlistOpen) return null;

    const handleMoveToCart = (item) => {
        addToCart(item);
        removeFromWishlist(item.id);
    };

    return (
        <div className="wishlist-overlay" onClick={toggleWishlist}>
            <div className="wishlist-modal" onClick={(e) => e.stopPropagation()}>

                {/* Header */}
                <div className="wishlist-header">
                    <h2>Your Wishlist</h2>
                    <button className="wishlist-close-btn" onClick={toggleWishlist}>&times;</button>
                </div>

                {/* Items */}
                <div className="wishlist-items">
                    {wishlist.length === 0 ? (
                        <div className="wishlist-empty">
                            <span className="wishlist-empty-icon">♡</span>
                            <p>Your wishlist is empty.</p>
                            <small>Tap the heart on any product to save it here.</small>
                        </div>
                    ) : (
                        wishlist.map((item) => (
                            <div key={item.id} className="wishlist-item">
                                <img src={item.image} alt={item.name} />
                                <div className="wishlist-item-info">
                                    <h4>{item.name}</h4>
                                    <p className="wishlist-item-category">{item.category}</p>
                                    <span className="wishlist-item-price">${item.price}</span>
                                    <div className="wishlist-item-actions">
                                        <button
                                            className="wishlist-move-btn"
                                            onClick={() => handleMoveToCart(item)}
                                        >
                                            Move to Cart
                                        </button>
                                        <button
                                            className="wishlist-remove-btn"
                                            onClick={() => removeFromWishlist(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </div>
        </div>
    );
}

export default WishlistModal;
