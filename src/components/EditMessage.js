import React from "react";

class EditMessage extends React.Component {
    
    state = {
        msgBodyText: ''
    }

    render() {
        const {editMessage, singleMessage} = this.props
        const {msgBodyText} = this.state

        const handleChangeMsgBody = (e) => {
            this.setState({msgBodyText: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            const updatedMessage = {
                messageBody: msgBodyText,
                id: e.target.id
            }
            editMessage(updatedMessage)
        }

        return (
            <form onSubmit={handleSubmit} id={singleMessage.id}>
                <label>Message Body: </label>
                <input type="text"
                className="label"
                placeholder={singleMessage.messageBody}
                value={msgBodyText}
                onChange={handleChangeMsgBody}
                />
                <input type="submit" className="btn"/>
            </form>
        )
    }
}

export default EditMessage