import React from 'react' 
import MessageItem from './MessageItem'

const Messages = ({messages, deleteMessage, selectSingleMessage}) => {
    return (
        <div>
            {messages.map(message => (
                <MessageItem key={message.id} message={message} deleteMessage={deleteMessage} selectSingleMessage={selectSingleMessage}/>
            ))}
        </div>
    )
}

export default Messages