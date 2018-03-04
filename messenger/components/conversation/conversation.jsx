import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import axios from 'axios';

export default class Conversation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {

    axios.get(`/conversation/${this.props.conversation.id}/messages`)
    .then(({data}) => {
      this.setState({
        messages: data
      });
    });
    let socket = this.socket = io('/messages');

    socket.on('connect', () => { console.log('Connected to server!'); });
    socket.on('disconnect', () => { console.log('Disconnected from server!'); });

    socket.on('connect', () => {
      socket.emit('join_conversation', this.props.conversation.id);
      socket.emit('new_message', this.props.conversation.id, 'hello');
    });

    socket.on('new_message', (msg) => {
      console.log("New message!");
      console.log(msg);
    });
  }

  render() {
    return (
      <div className="container">
        Conversation
      </div>
    );
  }
}
