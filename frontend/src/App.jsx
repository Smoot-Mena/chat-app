import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ChatHome from "./pages/ChatHome";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatRoom from "./pages/ChatRoom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import customAxiosAndBaseURL from "./api";

const socket = io.connect("http://localhost:5175");

function App() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const getUser = async (token) => {
    try {
      const response = await customAxiosAndBaseURL.get("/api", {
        headers: {
          Authorization: token
        }
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
      localStorage.removeItem("token");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getUser(token);
    } else {
      setIsLoading(false);
    };

  }, []);

  let loggedIn = user.username;

  return (
    <section>
      <Navbar username={user.username} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/chathome" element={<ChatHome username={username} setUsername={setUsername} room={room} setRoom={setRoom} socket={socket} />} />
        <Route path="/chatroom" element={<ChatRoom username={username} room={room} socket={socket} />} />
        {loggedIn ? 
                    <>
                        <Route path="/profile" element={<Profile username={user.username} email={user.email} />} />
                        {!isLoading && <Route path="*" element={<Navigate to="/" />} />}
                    </>
                    :
                    <>
                        <Route path="/login" element={<Login setUser={setUser} />} />
                        <Route path="/signup" element={<SignUp setUser={setUser} />} />
                        {!isLoading && <Route path="*" element={<Navigate to="/login" />} />}
                    </>
                }
      </Routes>
    </section>
  )
}

export default App;