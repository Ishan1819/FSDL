# A5 — Wanderly Travels (Travel Agency Website)

A simple functional travel agency website built with **Node.js**, **Express**, and **EJS** templates.
All data (packages, testimonials, team, company info) is hardcoded in [data/packages.js](data/packages.js) —
no database is used.

## Run

```bash
npm install
npm start
```

Then open http://localhost:3000

## Pages

- `/` — Home with hero, featured packages, testimonials
- `/packages` — All packages, filterable by category/destination
- `/packages/:slug` — Package detail with itinerary and related packages
- `/about` — Company info and team
- `/contact` — Contact form (POST is only echoed back, nothing is persisted)
