import axios from 'axios';

export const REQUEST_CONVERSATIONS = 'REQUEST-CONVERSATIONS';
export function requestConversations(){
  return {
    type: REQUEST_CONVERSATIONS,
  };
}

export const CONVERSATIONS_TO_STATE = 'CONVERSATIONS-TO-STATE';
export function conversationsToState(conversations) {
  return {
    type: CONVERSATIONS_TO_STATE,
    conversations,
  };
}

export function loadConversations() {
  return dispatch => {
    dispatch(requestConversations());
    axios.get('/conversations')
    .then(({data}) => {
      let conversations = {};
      data.map(conversation => {
        conversations[conversation.id] = conversation;
      });
      dispatch(conversationsToState(conversations));
    });
  };
}
