# A7 — Full-Stack E-commerce App (React + Express)

A full-stack e-commerce assignment with a React (Vite) client and an Express REST API backend.
Product data is hardcoded in [server/data/products.js](server/data/products.js) — no database is used;
orders are kept in an in-memory array that resets on server restart.

## Project Structure
```
client/   # React + Vite frontend
server/   # Express REST API backend
```

## Backend (server)

### Technologies
- Node.js, Express, CORS

### Run
```bash
cd server
npm install
npm start        # or: npm run dev (auto-restart with --watch)
```
Runs at http://localhost:5000

### API Endpoints
- `GET /api/products` — list products, filterable by `?category=` and `?search=`
- `GET /api/categories` — list distinct product categories
- `GET /api/products/:id` — get a single product
- `POST /api/orders` — place an order (fake checkout; returns an order confirmation)

## Frontend (client)

### Technologies
- React 18, Vite, React Router DOM
- `CartContext` for cart state

### Run
```bash
cd client
npm install
npm run dev
```
Open the URL Vite prints (default http://localhost:5173). Requires the backend server running for API calls.

### Pages
- **Home** — product grid with category/search filters
- **Product Detail** — single product view
- **Cart** — review cart items
- **Checkout** — place an order
- **Order Success** — order confirmation

### Build
```bash
npm run build
```
