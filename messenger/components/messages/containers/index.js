import React from 'react';
import { connect } from 'react-redux';

import ModalRoot from './modalroot';

class Root extends React.Component {
  render() {
    return (
      <div>
        <ConversationsPanel />
        <ModalRoot />
      </div>
    );
  }
}

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Root);