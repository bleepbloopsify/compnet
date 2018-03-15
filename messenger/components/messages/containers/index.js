import React from 'react';
import { connect } from 'react-redux';

import ConversationTab from './conversationtab';

import {
  requestUsers, requestConversations
} from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    return (
      <div>
        <ConversationTab />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => {
      dispatch(requestUsers());
      dispatch(requestConversations());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)