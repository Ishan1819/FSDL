# FSDL — Full Stack Development Laboratory

Practical assignments for the Full Stack Development Laboratory course. Each `a1`–`a4`, `A5`–`A7` folder is a self-contained assignment with its own README.

## Student Details

| Field | Value |
|-------|-------|
| Name | Ishan Pravin Patil |
| Roll No / PRN | 123B1B021 |
| Class | BTech Final Year |
| Division | A |
| Subject | DevOps (FSDL) |

## Repository Link
https://github.com/Ishan1819/FSDL

## Hosted Website Link
https://ishan1819.github.io/FSDL/

## Assignments

| # | Folder | Title | Stack |
|---|--------|-------|-------|
| 1 | [a1](a1/) | HTML Text Formatting Tags | HTML, CSS |
| 2 | [a2](a2/) | Personal Portfolio Page | HTML, CSS, JS |
| 3 | [a3](a3/) | Jucci — E-commerce React App | React, Context API |
| 4 | [a4](a4/) | E-commerce Analytics Dashboard | React, Chart.js |
| 5 | [A5](A5/) | Wanderly Travels — Travel Agency Website | Node.js, Express, EJS |
| 6 | [A6](A6/) | Used Marketplace — Online Classifieds Website | Node.js, Express, EJS |
| 7 | [A7](A7/) | Full-Stack E-commerce App | React (Vite) + Express REST API |

See each folder's `README.md` for setup instructions, features, and how to run it.

## Repository Structure
```
FSDL/
  a1/   # HTML formatting tags demo
  a2/   # Static HTML/CSS/JS portfolio (deployed to GitHub Pages)
  a3/   # React e-commerce app
  a4/   # React analytics dashboard
  A5/   # Express + EJS travel agency site
  A6/   # Express + EJS marketplace site
  A7/   # React + Express full-stack e-commerce app
  .github/workflows/   # CI/CD (GitHub Pages deployment for a2)
```

## Deployment
`a2` auto-deploys to GitHub Pages via [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) on every push to `main` that touches the `a2/` folder.

## Getting Started
Each assignment has its own dependencies. Navigate into the relevant folder and follow its README, e.g.:
```bash
cd a3
npm install
npm start
```
