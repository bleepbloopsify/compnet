import { START_REQUEST_CONVERSATION, LOAD_CONVERSATIONS} from '../actions';

const initialState = {};

export default function conversations(state=initialState, action) {
  switch(action.type) {
  case LOAD_CONVERSATIONS:
    return action.conversations;
  default:
    return state;
  }
}