import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import axios from 'axios';

import './conversation.scss';

export default class Conversation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.conversation);
    return (
      <div>
        <div className="container">
          <Messages messages={this.props.messages} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <NewMessage conversation={this.props.conversation} socket={this.props.socket} />
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
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="message">
            <span className="display_name">{this.props.message.user.display_name}</span>
            <span className="message-body">{this.props.message.text}</span>
          </div>
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