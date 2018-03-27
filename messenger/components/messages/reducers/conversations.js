import {
  CONVERSATIONS_TO_STATE,
} from '../actions/conversations';

const initialState = {
};

export default function(state=initialState, action) {
  switch(action.type) {
  case CONVERSATIONS_TO_STATE:
    return action.conversations;
  default:
    return state;
  }
}