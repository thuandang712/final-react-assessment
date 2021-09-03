import React from "react";

const MessageItem = ({message, deleteMessage, selectSingleMessage}) => {

    const handleDelete = (e) => {
        deleteMessage(e.target.id)
    }

    return (
        <div>
            <h1 onClick={() => selectSingleMessage(message)}>{message.userName}</h1>
            <p>{message.messageBody}</p>
            <button id={message.id} onClick={handleDelete}>Delete</button>
        </div>
    )   
}

export default MessageItem