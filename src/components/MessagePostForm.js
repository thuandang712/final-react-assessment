import React from "react";

class MessagePostForm extends React.Component {
    state = {
        userNameText: '',
        msgBodyText: ''
    }
    
    
    render() {
        const {userNameText, msgBodyText} = this.state
        const {addMessage} = this.props 

    
        const handleChangeUserName = (e) => {
            this.setState({userNameText: e.target.value})
        }

        const handleChangeMsgBody = (e) => {
            this.setState({msgBodyText: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            addMessage({userName: userNameText, messageBody: msgBodyText})
            this.setState({userNameText: '', msgBodyText: ''})
        }


        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User Name: </label>
                    <input type="text"
                    className="label"
                    placeholder="User Name"
                    value={userNameText}
                    onChange={handleChangeUserName}
                    />
                </div>
                
                <div>
                    <label>Message Body: </label>
                    <input type="text"
                    className="label"
                    placeholder="Message Body"
                    value={msgBodyText}
                    onChange={handleChangeMsgBody}
                    />
                </div>

                <input type="submit" className="btn"/>
            </form>
        )
    }
}


export default MessagePostForm