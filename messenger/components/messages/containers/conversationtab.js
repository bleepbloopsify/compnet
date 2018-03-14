import React from 'react';
import { connect } from 'react-redux';

import ConversationSidebar from '../components/conversationtab';

import ConversationRow from './conversationrow';

class ConversationTab extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let { conversations } = this.props;

    let sidebarContent = (
      <div className="list-group list-group-flush">
        {Object.values(conversations).map(conversation =>
          <ConversationRow key={conversation.id}
          {...conversation}
          />
        )}
      </div>
    );

    return (
      <div>
        <ConversationSidebar
          docked={true}
          sidebar={sidebarContent}
          styles={{
            root: {
              top: 50,
            },
          }}>
          <div className="container">
           Hello
          </div>
        </ConversationSidebar>
        <div className="modal goes here" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    conversations: state.conversations,
  };
}

const mapDispatchToProps = dipatch => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationTab);