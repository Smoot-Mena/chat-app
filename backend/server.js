const express = require("express");
const cors = require("cors");

require("dotenv").config();

const mongoConfig = require("./config");

mongoConfig();

const app = express();

const PORT = 3216;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Root Page</h1>");
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}...`);
});