import { useNavigate } from "react-router-dom";

const ChatHome = ( {room, setRoom, username, setUsername, socket} ) => {

    const navigate = useNavigate();

    const joinRoom = () => {
        room !== "" && username !== "" ? socket.emit("join_room", {username, room}): null;

        navigate("/chatroom", {replace: true});
    };

    return ( 
        <section style={{
            marginTop: "20vh",
            marginLeft: "30vw",
        }}>
            <h1 style={{ marginLeft: "9vw", width: "200px", marginBottom: "30px", fontSize: "2em" }}>Chat Rooms</h1>
            <form style={{
                display: "flex",
                flexFlow: "row wrap",
                gap: "30px",
                padding: "20px",
                width: "350px",
                backgroundImage: "linear-gradient(to top, snow, powderblue, lightskyblue)",
                borderRadius: "7px",
                marginLeft: "5vw"
            }}>
                <label style={{
                    width: "80px",
                    fontWeight: "bold",
                    paddingTop: "4px",
                }} htmlFor="username">Username: </label>
                <input style={{
                    width: "200px",
                    padding: "5px",
                    border: "1px solid cadetblue"
                }} name="username" type="text" onChange={(event) => setUsername(event.target.value)} />

                <label style={{
                    width: "110px",
                    fontWeight: "bold",
                    paddingTop: "4px",
                }} htmlFor="select-room">Select Room: </label>
                <select style={{
                    width: "150px",
                    padding: "5px",
                    border: "1px solid cadetblue",
                    backgroundColor: "azure",
                    fontWeight: "bold",
                }} name="room-selection" id="room-selection" onChange={(event) => setRoom(event.target.value)}>
                    <option value="">---select a room---</option>
                    <option style={{ color: "azure", backgroundColor: "deepskyblue" }} value="blue">Blue Room</option>
                    <option style={{ color: "lavenderblush", backgroundColor: "crimson" }} value="red">Red Room</option>
                    <option style={{ color: "peachpuff", backgroundColor: "orangered" }} value="orange">Orange Room</option>
                    <option style={{ color: "lightgreen", backgroundColor: "darkgreen" }} value="green">Green Room</option>
                </select>
                <button style={{
                    width: "max-content",
                    padding: "10px",
                    marginLeft: "110px",
                    backgroundImage: "linear-gradient(snow, lightgreen, limegreen, green)",
                    fontWeight: "bold",
                    color: "darkgreen",
                    border: "none",
                    borderRadius: "7px",
                    boxShadow: "2px 3px 3px black",
                    cursor: "pointer"
                }} onClick={joinRoom}>Join Room</button>
            </form>
        </section>
    );
}
 
export default ChatHome;