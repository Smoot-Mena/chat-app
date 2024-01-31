import Messages from "../components/Messages";
import SendMessages from "../components/SendMessages";

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
                justifyContent: "center",
                overflow: "scroll",
                scrollSnapAlign: "start"
            }}>
                <Messages socket={socket} />
            </section>
            <section style={{
                width: "20vw",
                height: "70vh",
                border: "5px solid darkgreen"
            }} id="chatinfo-window"></section>
            <section id="user-input">
                <SendMessages socket={socket} username={username} room={room} />
            </section>
        </section>
     );
}
 
export default ChatRoom;