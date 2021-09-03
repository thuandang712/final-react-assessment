import React from "react";

const MessageItem = ({message, deleteMessage, selectSingleMessage}) => {

    const handleDelete = (e) => {
        deleteMessage(e.target.id)
    }

    return (
        <div className='grid-items'>
            <h1 className='user-name' onClick={() => selectSingleMessage(message)}>{message.userName}</h1>
            <p className='msg-body'>{message.messageBody}</p>
            <button className='delete-btn' id={message.id} onClick={handleDelete}>Delete</button>
        </div>
    )   
}

export default MessageItem