import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import io from 'socket.io-client';

import Conversation from './conversation/conversation.jsx';

ReactDOM.render(
  <Conversation />,
  document.getElementById('react-container')
);