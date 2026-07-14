const BASE_URL = "/api";

export async function getProducts({ category, search } = {}) {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (search) params.set("search", search);

  const res = await fetch(`${BASE_URL}/products?${params.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProduct(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error("Product not found");
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function placeOrder(payload) {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to place order");
  return res.json();
}
