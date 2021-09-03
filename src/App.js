import React from 'react'
import Loading from './components/Loading';
import SingleMessage from './components/SingleMessage';
import MessagePostForm from './components/MessagePostForm';
import Messages from './components/Messages';
import Error from './components/Error'

import { v4 as uuidv4 } from 'uuid';
import './App.css';


class App extends React.Component {

  state = {
    messages: [
      // {
      //   userName: '',
      //   messageBody: '',
      //   id: 'uuid'
      // }
    ],
    loading: false,
    singleMessage: null,
    empty: false
  }
  
  
  render() {
    const {messages, loading, singleMessage, empty} = this.state
    
    // add 
    const addMessage = (obj) => {
      const id = uuidv4()
      obj.id = id
      if (obj.userName.length === 0 || obj.messageBody.length === 0) {
        // alert ('Please enter user name and message body')
        this.setState({empty: true})
        setTimeout( () => {
          this.setState({empty: false})
        }, 2000)
      } else {
        this.setState({messages: [...messages, obj]})
        // this.setState({empty: false})
      }
    }

    // delete
    const deleteMessage = (id) => {
      this.setState({messages: messages.filter(message => message.id !== id)})
    }

    // select single message
    const selectSingleMessage = (message) => {
      this.setState({singleMessage: message})
    }

    // clear single message
    const clearSingleMessage = () => {
      this.setState({singleMessage: null})
    }

    // edit message 
    const editMessage = (obj) => {
      const updated = messages.map(message => {
        if (obj.id === message.id) {
          message.messageBody = obj.messageBody
        }
        return message
      })
      this.setState({messages: updated})
      this.setState({singleMessage: null})
    }

    // conditional rendering
    if (loading) {
      return <Loading />
    }

    if (singleMessage) {
      return <SingleMessage singleMessage={singleMessage} clearSingleMessage={clearSingleMessage} editMessage={editMessage}/>
    }


    return (
      <div className="container">
        <h1 className='title'>My messaging system.</h1>
        <MessagePostForm addMessage={addMessage}/>
        {empty && <Error/>}
        <Messages messages={messages} deleteMessage={deleteMessage} selectSingleMessage={selectSingleMessage}/>
      </div>
    );
  }
  
}

export default App;
