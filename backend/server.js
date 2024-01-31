const express = require("express");
const app = express();
const cors = require("cors");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

require("dotenv").config();

const mongoConfig = require("./config");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const { authorize } = require("./middleware/authMiddleware");

const PORT = 3216;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api", authorize, userRoutes);

// Socket.IO Stuff
const server = createServer(app);

const io = new Server( server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

const CHAT_BOT = "ChatBot";
let chatRoom = "";
let allUsers = []; // all of the current users in the chat room

// Listening for when a user connects to Socket.IO
io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Add a user to a room
    socket.on("join_room", (data) => {
        const {username, room} = data; // from frontend useStates
        socket.join(room); // the user joins a socket room

        let _createdTime = Date.now(); // Adds timestamp
        // Sends public message to all users currently in the room
        socket.to(room).emit("receive_message", {
            message: `${username} has just entered the chat room`,
            username: CHAT_BOT,
            _createdTime
        });

        // Sends a welcome message to the newbie only
        socket.emit("receive_message", {
            message: `Welcome ${username}`,
            username: CHAT_BOT,
            _createdTime,
        });

        // Save the new user to the room
        chatRoom = room;
        allUsers.push( {id: socket.id, username, room} );
        let chatRoomUsers = allUsers.filter((user) => user.room === room);
        socket.to(room).emit("chatroom_users", chatRoomUsers);
        socket.emit("chatroom_users", chatRoomUsers);
    });

    socket.on("send_message", (data) => {
        const {message, username, room, _createdTime} = data;
        io.in(room).emit("receive_message", data);
    });

});

// Listening to Express
app.listen(PORT, () => {
    mongoConfig();
    console.log(`Listening to port ${PORT}...`);
});

// Listening to Socket.IO 
server.listen(5175, () => {
    console.log(`Server running on port 5175...`);
});