import { useEffect, useState } from "react";

const Messages = ( {socket} ) => {
    const [messagesReceived, setMessagesReceived] = useState([]);

    // Loads previous messages
    useEffect(() => {
        socket.on("receive_message", (data) => {
            console.log(data);
            setMessagesReceived((prevState) => [
                ...prevState, {
                    message: data.message,
                    username: data.username,
                    _createdTime: data._createdTime
                }
            ]);
        });
        return () => socket.off("receive_message");
    }, [socket]);

    // Formats timestamp
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };
    return ( 
        <section>{messagesReceived.map((message, index) => (
            <section key={index}>
                <section>
                    <span style={{ color: "blue", fontWeight: "bold", fontSize: "1.1em" }}>{message.username}</span> -
                    <span><i style={{ color: "purple", fontWeight: "bold", fontSize: ".65em" }}>({formatTimestamp(message._createdTime)})</i></span>
                </section>
                <section>
                    <p>{message.message}</p>
                </section>
                <br />
            </section>
        ))}</section>
    );
}
 
export default Messages;