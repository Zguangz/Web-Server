const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs"); // start hbs
app.set("views", viewsPath); // changing hbs default views folder to another directory
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", { title: "Weather App", name: "Jason" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", name: "Jason" });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Jason",
    helpText: "This is a helpful text",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Singapore",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
