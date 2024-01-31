import Messages from "../components/Messages";
import SendMessages from "../components/SendMessages";
import RoomInfo from "../components/RoomInfo";

const ChatRoom = ( {room, setRoom, username, setUsername, socket} ) => {
    let textColor = "";
    let bannerColor = "";

    let chatRoomColors = {
        blueRoom: {
            banner: "deepskyblue",
            text: "azure"
        },
        redRoom: {
            banner: "crimson",
            text: "lavenderblush"
        },
        orangeRoom: {
            banner: "orangered",
            text: "peachpuff"
        },
        greenRoom: {
            banner: "darkgreen",
            text: "lightgreen"
        }
    };

    if (room === "red") {
        textColor = chatRoomColors.redRoom.text;
        bannerColor = chatRoomColors.redRoom.banner;
    } else if (room === "orange") {
        textColor = chatRoomColors.orangeRoom.text;
        bannerColor = chatRoomColors.orangeRoom.banner;
    } else if (room === "green") {
        textColor = chatRoomColors.greenRoom.text;
        bannerColor = chatRoomColors.greenRoom.banner;
    } else {
        textColor = chatRoomColors.blueRoom.text;
        bannerColor = chatRoomColors.blueRoom.banner;
    }

    return ( 
        <section style={{
            width: "75vw",
            display: "flex",
            flexFlow: "row wrap",
            boxShadow: "2px 3px 3px black",
            backgroundColor: "papayawhip", 
            marginTop: "10vh",
            marginLeft: "5vw",
            minWidth: "1100px",
        }}>
            <header style={{
                    backgroundColor: `${bannerColor}`,
                    color: `${textColor}`,
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "inherit"
                }}><section>
                    <img src="/src/assets/react.svg" alt="Logo" width="20px"/>
                    {room} Chat Room
                </section>
                <section style={{ backgroundColor: "lightgrey" }}>
                    <span style={{
                        color: "black",
                        padding: "0 6px",
                        boxShadow: "1px 1px 2px black",
                    }}>_</span><span style={{
                        color: "black",
                        padding: "0 6px",
                        boxShadow: "1px 1px 2px black",
                    }}>X</span>
                </section>
            </header>
            <section id="chat-window"
            style={{
                width: "60vw",
                height: "70vh",
                border: "2px solid darkblue",
                justifyContent: "center",
                overflow: "scroll",
                scrollSnapAlign: "start",
                padding: "2vw",
                lineHeight: "2em",
                backgroundColor: "aliceblue",
                letterSpacing: "2px",
                boxShadow: "1px 2px 3px black",
                marginBottom: "5px",
            }}>
                <Messages socket={socket} />
            </section>
            <section style={{
                width: "10vw",
                height: "50vh",
                marginTop: "10vh",
                border: "2px solid darkblue",
                backgroundColor: "aliceblue",
                overflow: "scroll",
                scrollSnapAlign: "start",
                boxShadow: "1px 2px 3px black",
                marginLeft: "5px",
            }} id="chatinfo-window">
                <RoomInfo socket={socket} username={username} room={room} />
            </section>
            <section id="user-input">
                <SendMessages socket={socket} username={username} room={room} />
            </section>
        </section>
     );
}
 
export default ChatRoom;