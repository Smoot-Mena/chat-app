import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoomInfo = ( {socket, username, room} ) => {
    const [roomUsers, setRoomUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        socket.on("chatroom_users", (data) => {
            console.log(data);
            setRoomUsers(data);
        });

        return () => { socket.off("chatroom_users") };
    }, [socket]);

    const leaveRoom = () => {
        const _createdTime = Date.now();
        socket.emit("leave_room", {username, room, _createdTime});

        navigate("/", {replace: true});
    };

    return ( 
        <section style={{ padding: "20px" }}>
            <h3 style={{ fontSize: "1.25em", textDecoration: "underline", color: `${room}` }}>{room} room</h3>
            <ul style={{ listStyle: "none", lineHeight: "30px", marginTop: "10px" }}>
                {roomUsers.map((user, index) => (
                    <li key={index}>{user.username}</li>
                ))}
            </ul>

            <button style={{ 
                position: "relative", 
                top: "30px",
                width: "max-content",
                padding: "10px",
                marginLeft: "10px",
                backgroundImage: "linear-gradient(snow, lightgreen, limegreen, green)",
                fontWeight: "bold",
                color: "darkgreen",
                border: "none",
                borderRadius: "7px",
                boxShadow: "2px 3px 3px black",
                cursor: "pointer" 
                }} onClick={leaveRoom}>Leave Room</button>
        </section>
     );
}
 
export default RoomInfo;