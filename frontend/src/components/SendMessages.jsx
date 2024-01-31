import { useState } from "react";

const SendMessages = ( {socket, username, room} ) => {

    const [message, setMessage] = useState("");

    const messageSend = (event) => {
        event.preventDefault();
        console.log(message);
        if (message) {
            let _createdTime = Date.now();
            socket.emit("send_message", {username, room, message, _createdTime});
            setMessage("");
        };
    };
    return ( 
        <section>
            <form >
                <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} style={{
                        width: "50vw",
                        height: "5vh",
                        border: "2px solid cadetblue",
                        color: "navy", 
                        backgroundColor: "azure",
                        boxShadow: "2px 3px 3px black",
                        marginBottom: "5px",
                    }} />
                    <button style={{
                        width: "max-content",
                        padding: "0 10px",
                        height: "5vh",
                        color: "steelblue",
                        fontWeight: "bold",
                        backgroundImage: "linear-gradient(snow, lightblue, dodgerblue)",
                        border: "none",
                        marginLeft: "5px", 
                        boxShadow: "2px 3px 3px black",
                        cursor: "pointer",
                        borderRadius: "7px"
                    }} onClick={messageSend}>Send ↪</button>
            </form>
        </section>
     );
}
 
export default SendMessages;