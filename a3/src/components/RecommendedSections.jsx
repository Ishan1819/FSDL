// ============================================================
// [NEW] RecommendedSections.jsx
// Three curated product rows: Season Picks, Trending, Also Like
// Uses same ProductCard component as the main collection.
// ============================================================
import ProductCard from './ProductCard';
import { products } from '../data/products';
import './RecommendedSections.css';

// Curated picks — slice different products for each section
const seasonPicks = [products[0], products[2], products[4]]; // Silk Shirt, Knit, Skirt
const trendingNow = [products[1], products[3], products[5]]; // Trench, Denim, Tote
const alsoLike = [products[4], products[0], products[3]]; // Skirt, Silk Shirt, Denim

function ProductRow({ title, label, items }) {
    return (
        <div className="rec-section">
            <div className="rec-section-header container">
                <div className="rec-section-title-group">
                    <span className="rec-section-label">{label}</span>
                    <h2>{title}</h2>
                </div>
                <span className="rec-divider" />
            </div>
            <div className="rec-grid container">
                {items.map((product) => (
                    <ProductCard key={`${title}-${product.id}`} product={product} />
                ))}
            </div>
        </div>
    );
}

function RecommendedSections() {
    return (
        <section className="recommended-wrapper">
            <ProductRow label="Curated Picks" title="Recommended for This Season" items={seasonPicks} />
            <ProductRow label="What's Hot" title="Trending Now" items={trendingNow} />
            <ProductRow label="Discover More" title="You May Also Like" items={alsoLike} />
        </section>
    );
}

export default RecommendedSections;
