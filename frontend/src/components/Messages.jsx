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
                    <span>{message.username}</span>
                    <span>{formatTimestamp(message._createdTime)}</span>
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