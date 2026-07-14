const express = require("express");
const path = require("path");
const { listings, testimonials, siteInfo } = require("./data/listings");

const app = express();
const PORT = process.env.PORT || 3001;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const categories = [...new Set(listings.map((l) => l.category))];
const locations = [...new Set(listings.map((l) => l.location))];

app.use((req, res, next) => {
  res.locals.siteInfo = siteInfo;
  res.locals.currentPath = req.path;
  next();
});

app.get("/", (req, res) => {
  const featured = listings.slice(0, 6);
  res.render("index", { featured, testimonials, categories });
});

app.get("/listings", (req, res) => {
  const { category, location, maxPrice, sort } = req.query;
  let filtered = listings;

  if (category) {
    filtered = filtered.filter(
      (l) => l.category.toLowerCase() === category.toLowerCase()
    );
  }
  if (location) {
    filtered = filtered.filter((l) =>
      l.location.toLowerCase().includes(location.toLowerCase())
    );
  }
  if (maxPrice) {
    filtered = filtered.filter((l) => l.price <= Number(maxPrice));
  }

  filtered = [...filtered];
  if (sort === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "year-new") {
    filtered.sort((a, b) => b.year - a.year);
  }

  res.render("listings", {
    listings: filtered,
    categories,
    selectedCategory: category || "",
    searchLocation: location || "",
    maxPrice: maxPrice || "",
    sort: sort || ""
  });
});

app.get("/listings/:slug", (req, res) => {
  const item = listings.find((l) => l.slug === req.params.slug);
  if (!item) {
    return res.status(404).render("404");
  }
  const related = listings
    .filter((l) => l.category === item.category && l.id !== item.id)
    .slice(0, 3);
  res.render("listing-detail", { item, related });
});

app.get("/sell", (req, res) => {
  res.render("sell", { submitted: false, categories });
});

app.post("/sell", (req, res) => {
  const { title, category, price, location, description } = req.body;

  if (!title || !category || !price || !location) {
    return res.status(400).render("sell", {
      submitted: false,
      error: "Please fill in title, category, price, and location before submitting.",
      categories,
      title,
      category,
      price,
      location,
      description
    });
  }

  // No database — the submitted ad is only echoed back, not persisted.
  res.render("sell", {
    submitted: true,
    categories,
    title,
    category,
    price,
    location,
    description
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact", { submitted: false });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  // No database — request is simply acknowledged back to the user.
  res.render("contact", {
    submitted: true,
    name,
    email,
    message
  });
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`${siteInfo.name} server running at http://localhost:${PORT}`);
});
