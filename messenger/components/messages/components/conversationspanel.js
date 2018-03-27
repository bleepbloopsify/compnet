import React from 'react';

import Sidebar from './sidebar';
import CurrentConversation from '../containers/currentconversation';

export default class ConversationsPanel extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Sidebar />
          </div>
          <div className="col-md-8">
            <CurrentConversation />
          </div>
        </div>
      </div>
    );
  }
}