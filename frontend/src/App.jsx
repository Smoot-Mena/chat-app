import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ChatHome from "./pages/ChatHome";
import { useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5173");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chathome" element={<ChatHome username={username} setUsername={setUsername} room={room} setRoom={setRoom} socket={socket} />} /> 
      </Routes>
    </section>
  )
}

export default App;