// ============================================================
// [MODIFIED] ProductCard.jsx — Feature: Wishlist
// Added: "Add to Wishlist" button that toggles.
// Cart button untouched.
// ============================================================
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext'; // [NEW] Wishlist
import './ProductCard.css';

function ProductCard({ product }) {
    const { addToCart } = useCart();
    // [NEW] Wishlist helpers
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    const wishlisted = isInWishlist(product.id);

    // [NEW] Toggle wishlist membership
    const handleWishlistToggle = () => {
        if (wishlisted) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} />
                {/* Existing cart button — unchanged */}
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
                {/* [NEW] Wishlist button */}
                <button
                    className={`add-to-wishlist-btn ${wishlisted ? 'wishlisted' : ''}`}
                    onClick={handleWishlistToggle}
                    title={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                    {wishlisted ? '♥ Wishlisted' : '♡ Wishlist'}
                </button>
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <span className="product-price">${product.price}</span>
            </div>
        </div>
    );
}

export default ProductCard;
