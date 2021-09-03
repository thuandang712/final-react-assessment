import React from 'react'
import EditMessage from './EditMessage'

class SingleMessage extends React.Component {

    state = {
        edit: false
    }

    render() {
        const {singleMessage, clearSingleMessage, editMessage} = this.props
        const {edit} = this.state

        const handleEdit = () => {
            this.setState({edit: true})
        }

        return (
            <div className='container'>
                <h1 className='title'>Single Message</h1>
                <h2 className='user-name'>{singleMessage.userName}</h2>
                <p className='msg-body'>{singleMessage.messageBody}</p>
                <button className='back-btn' onClick={()=> clearSingleMessage()}>Back</button>
                <button className='edit-btn' onClick={handleEdit}>Edit</button>
                {edit && <EditMessage editMessage={editMessage} singleMessage={singleMessage}/>}
            </div>
        )
    }
}

export default SingleMessage