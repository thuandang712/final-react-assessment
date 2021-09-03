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
            <div>
                <h1>Single Message</h1>
                <h2>{singleMessage.userName}</h2>
                <p>{singleMessage.messageBody}</p>
                <button onClick={()=> clearSingleMessage()}>Back</button>
                <button onClick={handleEdit}>Edit</button>
                {edit && <EditMessage editMessage={editMessage} singleMessage={singleMessage}/>}
            </div>
        )
    }
}

export default SingleMessage