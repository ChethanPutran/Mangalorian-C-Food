const path = require("path");
const express = require("express");
const hbs = require("hbs");
require("./db/dbConnection");
const Message = require("./modals/Message");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const { sendEmail } = require("./emails/email");

//Defining paths for Express config
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setting up public directory path
app.use(express.static(publicPath));
app.use(express.json());

//Setting view engine as Handlebars and views path
app.set("view engine", "hbs");
app.set("views", viewsPath);

hbs.registerPartials(partialsPath);

//Handling routes
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/login", (req, res) => {
    res.render("login");
});
app.get("/email", (req, res) => {
    res.render("inline");
});
app.post("/contact", async(req, res) => {
    try {
        const message = new Message(req.body);
        await message.save();
        await sendEmail(req.body.name, req.body.email);

        res.status(200).send({ data: "Sent Successfully." });
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: "Enter valid details!" });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});