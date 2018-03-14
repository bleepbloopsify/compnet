import React from 'react';
import { connect} from 'react-redux';

import Message from '../components/message';

class ConversationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { messages } = this.props;

    return (
      <div className="container">
        {Object.values(messages).map(message =>
          <div key={message.id}
            className="row">
            <Message {...message} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.selected.messages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationContainer);