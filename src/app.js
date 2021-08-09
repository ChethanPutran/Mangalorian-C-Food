const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = 3000;

//Defining paths for Express config
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setting up public directory path
app.use(express.static(publicPath));

//Setting view engine as Handlebars and views path
app.set("view engine", "hbs");
app.set("views", viewsPath);

hbs.registerPartials(partialsPath);

//Handling routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
