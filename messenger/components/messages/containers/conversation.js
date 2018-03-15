import React from 'react';
import { connect} from 'react-redux';

import Message from '../components/message';

class ConversationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { messages } = this.props;

    if (messages == null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto">
              <h3>Select or create a conversation on the side</h3>
            </div>
          </div>
        </div>
      );
    }

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
    messages: state.messages,
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationContainer);