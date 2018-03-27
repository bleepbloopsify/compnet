import axios from 'axios';

export const REQUEST_MESSAGES = 'START-LOAD-MESSAGES';
export function requestMessages(conversation_id) {
  return {
    type: REQUEST_MESSAGES,
    conversation_id,
  };
}

export const MESSAGES_TO_STORE = 'MESSAGES-TO-STORE';
export function messagesToStore(conversation_id, messages) {
  return {
    type: MESSAGES_TO_STORE,
    conversation_id,
    messages,
  };
}

export function loadMessages(conversation_id) {
  return dispatch => {
    dispatch(requestMessages(conversation_id));
    axios.get(`/conversations/${conversation_id}/messages`)
      .then( ({data}) => {
        dispatch(messagesToStore(conversation_id, data));
      });
  }
}

export const NEW_MESSAGE = 'NEW-MESSAGE';
export function newMessage(conversation_id, message) {
  return {
    type: NEW_MESSAGE,
    conversation_id,
    message,
  };
}
