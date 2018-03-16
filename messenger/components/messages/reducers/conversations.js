import { START_REQUEST_CONVERSATION, LOAD_CONVERSATIONS} from '../actions';

const initialState = {};

export default function conversations(state=initialState, action) {
  switch(action.type) {
  case LOAD_CONVERSATIONS:
    let conversations = {};
    action.conversations.map(conversation => {
      conversations[conversation.id] = conversation;
    });
    return conversations;
  default:
    return state;
  }
}