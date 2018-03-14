import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ConversationTab extends Component {
  constructor(props) {
    super(props);

  }

  selectConversation(conversation) {
    return (e) => {
      this.props.selectConversation(conversation);
    };
  }

  render() {
    return (
      <div className="conversations-sidebar">
        <div className="sidebar-title">
          Conversations:
        </div>
        <div>
          Create new conversation
        </div>
        <ul className="sidebar-nav">
          {this.props.conversations.map( (conversation, key) => {
            return (
              <li key={key} onClick={this.selectConversation(conversation)}>
                {conversation.display_name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
