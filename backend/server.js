const express = require("express");

const app = express();

const { plug } = require("socket.io");

const PORT = 3216;

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}...`);
});