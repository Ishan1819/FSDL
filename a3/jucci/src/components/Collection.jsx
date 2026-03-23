import { products } from "../data/products";
import ProductCard from "./ProductCard";
import "./Collection.css";

function Collection({ category }) {
  const filteredProducts = products.filter((product) => {
    if (category === "All") return true;
    return product.category === category; // strict match: Men → Men only, Women → Women only
  });

  return (
    <section className="collection container">
      <div className="collection-header">
        <h2>{category === "All" ? "The Collection" : `${category}'s Collection`}</h2>
        <p>
          A refined balance of heritage and modernity. Designed for those
          who define luxury on their own terms.
        </p>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Collection;
