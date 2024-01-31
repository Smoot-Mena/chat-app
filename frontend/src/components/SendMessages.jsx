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
            <form action="">
                <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} style={{
                        width: "70vw",
                        height: "10vh",
                        border: "5px solid purple"
                    }} />
                    <button style={{
                        width: "10vw",
                        height: "10vh"
                    }} onClick={messageSend}>Send ↪</button>
            </form>
        </section>
     );
}
 
export default SendMessages;