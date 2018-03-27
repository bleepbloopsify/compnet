import {
  NEW_MESSAGE, LOAD_MESSAGES
} from '../actions/messages';

const initialState = {};

export default function(state=initialState, action) {
  switch(action.type) {
  case NEW_MESSAGE:
    return Object.assign({}, state, {
      [action.conversation_id]: [...state[action.conversation_id], action.message]
    });
  case LOAD_MESSAGES:
    return Object.assign({}, state, {
      [action.conversation_id]: action.messages,
    });
  default:
    return state;
  }
};