import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import io from 'socket.io-client';

import Conversation from './conversation/conversation.jsx';
import ConversationTab from './conversationtab/conversationtab.jsx';

class MessageBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      conversations: [],
      conversation: null,
      messages: [],
    };

    this.socket = io('/messages');
    this.selectConversation = this.selectConversation.bind(this);
  }

  selectConversation(conversation) {
    let socket = this.socket;
    if (this.state.conversation) {
      socket.emit('leave_conversation', this.state.conversation.id);
    }
    socket.emit('join_conversation', conversation.id)
    this.setState({
      conversation: conversation,
      messages: [],
    });
    axios.get(`/conversations/${conversation.id}/messages`)
    .then(({data}) => {
      console.log(data);
      this.setState({
        messages: data
      });
    });
  }

  componentDidMount() {
    axios.get(`/users/self/conversations`)
      .then( ({data}) => {
        this.setState({
          conversations: data,
        });
      });

    let socket = this.socket;

    socket.on('connect', () => { console.log('Connected to server!'); });
    socket.on('disconnect', () => { console.log('Disconnected from server!'); });

    socket.on('new_message', (msg) => {
      this.setState({
        messages: [...this.state.messages, msg],
      });
    });
  }

  render() {
    return (
      <div className="message-board">
        <ConversationTab conversations={this.state.conversations} selectConversation={this.selectConversation} />
        {this.state.conversation != null ?
          <Conversation conversation={this.state.conversation} messages={this.state.messages} socket={this.socket} /> :
          <div className="container">
            <div className="row">
              Pick a conversation from the menu or create a new one!
            </div>
          </div>
        }
      </div>
    );
  }
}

ReactDOM.render(
  <MessageBoard />,
  document.getElementById('react-container')
);