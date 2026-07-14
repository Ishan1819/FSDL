# A6 — Used Marketplace (Online Classifieds Website)

A simple functional online marketplace for used items (cars, bikes, electronics, etc.) built with **Node.js**, **Express**, and **EJS** templates.
All data (listings, testimonials, site info) is hardcoded in [data/listings.js](data/listings.js) — no database is used.

## Run

```bash
npm install
npm start
```

Then open http://localhost:3001

## Pages

- `/` — Home with hero, featured listings, testimonials
- `/listings` — All listings, filterable by category/location/max price, sortable (price, year)
- `/listings/:slug` — Listing detail with related listings
- `/sell` — Post an ad form (POST is only echoed back, nothing is persisted)
- `/about` — Site info
- `/contact` — Contact form (POST is only echoed back, nothing is persisted)
