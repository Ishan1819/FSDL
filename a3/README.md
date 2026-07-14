# Assignment 3 — Jucci: E-commerce React App

A React single-page e-commerce storefront ("Jucci") with product browsing, cart, wishlist, and a mock login/auth flow.

## Aim
To build a multi-feature React front-end demonstrating component composition, Context API for state management, and client-side interactivity (cart, wishlist, auth) without a backend.

## Technologies Used
- React 18 (Create React App)
- React Context API (`AuthContext`, `CartContext`, `WishlistContext`)
- CSS (per-component stylesheets)
- [Motion](https://motion.dev/) for animations

## Features
- **Auth** — simple login gate (`LoginPage`) via `AuthContext`; app content is hidden until "logged in"
- **Product Collection** — browsable grid of products (`Collection`, `ProductCard`) sourced from `src/data/products.js`
- **Cart** — add/remove items, view totals in a modal (`CartModal`, `CartContext`)
- **Wishlist** — save items for later (`WishlistModal`, `WishlistContext`)
- **Checkout** — `CheckoutModal` for order placement
- **Recommended Sections** — curated product recommendations on the home page
- **About Us / Contact Us** — static informational pages, toggled via in-app navigation (no router)

## Project Structure
```
src/
  components/    # UI components (Navbar, Hero, Collection, ProductCard, modals, etc.)
  context/       # AuthContext, CartContext, WishlistContext
  data/          # products.js — hardcoded product catalog
  App.js         # page shell and routing state (home | about | contact)
```

## Run
```bash
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000).

## Build
```bash
npm run build
```
