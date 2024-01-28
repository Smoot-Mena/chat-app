import { useNavigate } from "react-router-dom";

const ChatHome = ( {room, setRoom, username, setUsername, socket} ) => {

    const navigate = useNavigate();

    const joinRoom = () => {
        room !== "" && username !== "" ? socket.emit("join-room", {username, room}): null;

        navigate("/chatroom", {replace: true});
    };

    return ( 
        <section>
            <h1>Chat Rooms</h1>
            <form action="">
                <label htmlFor="username">Username: </label>
                <input name="username" type="text" onChange={(event) => setUsername(event.target.value)} />

                <label htmlFor="select-room">Select Room: </label>
                <select name="room-selection" id="room-selection" onChange={(event) => setRoom(event.target.value)}>
                    <option value="blue">Blue Room</option>
                    <option value="red">Red Room</option>
                    <option value="orange">Orange Room</option>
                    <option value="green">Green Room</option>
                </select>
                <button onClick={joinRoom}>Join Room</button>
            </form>
        </section>
     );
}
 
export default ChatHome;