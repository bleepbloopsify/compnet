import React from 'react';
import { connect } from 'react-redux';

import ConversationTab from './conversationtab';

class App extends React.Component {
  constructor(props) {
    super(props);
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
  console.log('hello');
  return {
    test: 'hello',
  }
}

export default connect(mapStateToProps, null)(App)