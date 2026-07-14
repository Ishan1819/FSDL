import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { getProducts, getCategories } from "../api.js";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getCategories().then(setCategories).catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    setError("");
    getProducts({ category, search })
      .then(setProducts)
      .catch(() => setError("Could not reach the server. Is it running on port 5000?"))
      .finally(() => setLoading(false));
  }, [category, search]);

  return (
    <div>
      <h1>Browse Products</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="error">{error}</p>}
      {loading && <p>Loading products...</p>}

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {!loading && !error && products.length === 0 && (
        <p>No products match your filters.</p>
      )}
    </div>
  );
}
