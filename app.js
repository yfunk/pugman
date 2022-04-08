const express = require("express");
const path = require("path");

// App variables
const app = express();
const port = process.env.PORT || "8000";

// App configuration
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Routes definition
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});

// Server activation
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });