import { combineReducers } from 'redux';

import messages from './messages';
import conversations from './conversations';

export default combineReducers({
  messages,
  conversations,
});