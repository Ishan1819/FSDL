const express = require("express");
const cors = require("cors");
const products = require("./data/products");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory "orders" store, since there is no database.
// Resets whenever the server restarts.
const orders = [];
let nextOrderId = 1001;

// GET /api/products?category=Electronics&search=watch
app.get("/api/products", (req, res) => {
  const { category, search } = req.query;
  let result = products;

  if (category) {
    result = result.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }
  if (search) {
    const q = search.toLowerCase();
    result = result.filter((p) => p.name.toLowerCase().includes(q));
  }

  res.json(result);
});

// GET /api/categories
app.get("/api/categories", (req, res) => {
  const categories = [...new Set(products.map((p) => p.category))];
  res.json(categories);
});

// GET /api/products/:id
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

// POST /api/orders  -> fake checkout, just echoes back an order confirmation
app.post("/api/orders", (req, res) => {
  const { items, customer } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const hasInvalidItem = items.some(
    (item) =>
      typeof item.price !== "number" ||
      typeof item.qty !== "number" ||
      item.price < 0 ||
      item.qty <= 0
  );
  if (hasInvalidItem) {
    return res.status(400).json({ message: "Cart contains an invalid item" });
  }

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const order = {
    orderId: nextOrderId++,
    customer: customer || { name: "Guest" },
    items,
    total,
    status: "Confirmed",
    placedAt: new Date().toISOString(),
  };

  orders.push(order);
  res.status(201).json(order);
});

app.get("/", (req, res) => {
  res.send("A7 E-commerce API is running. Try /api/products");
});

app.listen(PORT, () => {
  console.log(`A7 server listening on http://localhost:${PORT}`);
});
