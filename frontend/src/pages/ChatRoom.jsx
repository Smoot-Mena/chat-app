import Messages from "../components/Messages";

const ChatRoom = ( {room, setRoom, username, setUsername, socket} ) => {
    return ( 
        <section style={{
            display: "flex",
            flexFlow: "row wrap"
        }}>
            <section id="chat-window"
            style={{
                width: "80vw",
                height: "70vh",
                border: "5px solid darkblue",
                justifyContent: "center"
            }}><Messages socket={socket} /></section>
            <section style={{
                width: "20vw",
                height: "70vh",
                border: "5px solid darkgreen"
            }} id="chatinfo-window"></section>
            <section id="user-input">
                <input style={{
                    width: "70vw",
                    height: "10vh",
                    border: "5px solid purple"
                }} type="textarea" />
                <button style={{
                    width: "10vw",
                    height: "10vh"
                }}>Send ↪</button>
            </section>
        </section>
     );
}
 
export default ChatRoom;