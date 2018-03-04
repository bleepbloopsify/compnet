import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import axios from 'axios';

import './conversation.scss';

export default class Conversation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      socket: io('/messages'),
    };
  }

  componentDidMount() {
    axios.get(`/conversations/${this.props.conversation.id}/messages`)
    .then(({data}) => {
      this.setState({
        messages: data
      });
    });
    let socket = this.state.socket;

    socket.on('connect', () => { console.log('Connected to server!'); });
    socket.on('disconnect', () => { console.log('Disconnected from server!'); });

    socket.on('connect', () => {
      socket.emit('join_conversation', this.props.conversation.id);
      socket.emit('new_message', this.props.conversation.id, 'hello');
    });

    socket.on('new_message', (msg) => {
      console.log("New message!");
      console.log(msg);
      console.log(this.state.messages);
      this.setState({
        messages: [...this.state.messages, msg],
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <Messages messages={this.state.messages} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <NewMessage conversation={this.props.conversation} socket={this.state.socket} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="messages-window">
        {this.props.messages.map((msg, key) => {
          return (
            <Message key={key} message={msg} />
          );
        })}
      </div>
    );
  }
}

class Message extends React.Component {
  render() {
    console.log('rerender');
    return (
      <div className="row">
        <div className="col-md-4">
          {this.props.message.text}
        </div>
      </div>
    );
  }
}

class NewMessage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };

    this.updateMessage = this.updateMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  updateMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

  sendMessage(e) {
    e.preventDefault();
    if (this.state.message) {
      this.props.socket.emit(
        'new_message',
        this.props.conversation.id,
        this.state.message
      );

      this.setState({
        message: '',
      });
    }
  }

  render() {
    return (
      <div className="new-message">
        <form onSubmit={this.sendMessage}>
          <fieldset className="form-group">
            <input type="text"
              value={this.state.message}
              className="form-control form-control-lg"
              placeholder="New message"
              onChange={this.updateMessage} />
          </fieldset>
        </form>
      </div>
    );
  }
}