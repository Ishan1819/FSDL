const express = require("express");
const path = require("path");
const { packages, testimonials, team, companyInfo } = require("./data/packages");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const categories = [...new Set(packages.map((p) => p.category))];

app.use((req, res, next) => {
  res.locals.companyInfo = companyInfo;
  res.locals.currentPath = req.path;
  next();
});

app.get("/", (req, res) => {
  const featured = packages.slice(0, 3);
  res.render("index", { featured, testimonials, companyInfo });
});

app.get("/packages", (req, res) => {
  const { category, destination } = req.query;
  let filtered = packages;

  if (category) {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }
  if (destination) {
    filtered = filtered.filter((p) =>
      p.destination.toLowerCase().includes(destination.toLowerCase())
    );
  }

  res.render("packages", {
    packages: filtered,
    categories,
    selectedCategory: category || "",
    searchTerm: destination || ""
  });
});

app.get("/packages/:slug", (req, res) => {
  const pkg = packages.find((p) => p.slug === req.params.slug);
  if (!pkg) {
    return res.status(404).render("404");
  }
  const related = packages
    .filter((p) => p.category === pkg.category && p.id !== pkg.id)
    .slice(0, 3);
  res.render("package-detail", { pkg, related });
});

app.get("/about", (req, res) => {
  res.render("about", { team, companyInfo });
});

app.get("/contact", (req, res) => {
  res.render("contact", { submitted: false });
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).render("contact", {
      submitted: false,
      error: "Please fill in all fields before submitting.",
      name,
      email,
      message
    });
  }

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
  console.log(`Wanderly Travels server running at http://localhost:${PORT}`);
});
