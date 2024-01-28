const express = require("express");
const app = express();
const cors = require("cors");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

require("dotenv").config();

const mongoConfig = require("./config");

mongoConfig();

const PORT = 5173;

// Middleware
app.use(cors());
app.use(express.json());

const server = createServer(app);

const io = new Server( server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

app.get("/", (req, res) => {
    res.send("<h1>Root Page</h1>");
});

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
});

// app.listen(PORT, () => {
//     console.log(`Listening to port ${PORT}...`);
// });

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});