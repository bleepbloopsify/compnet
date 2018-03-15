import axios from 'axios';

export const SELECTED_CONVERSATION = 'SELECTED-CONVERSATION';
export function selectConversation(conversation_id) {
  return {
    type: SELECTED_CONVERSATION,
    conversation_id: conversation_id,
  };
}

export const OPEN_CREATE_CONVERSATION_MODAL = 'OPEN-CREATE-CONVERSATION-MODAL';
export function openCreateConversationModal() {
  return {
    type: OPEN_CREATE_CONVERSATION_MODAL,
  };
}

export const CLOSE_CREATE_CONVERSATION_MODAL = 'CLOSE-CREATE-CONVERSATION-MODAL';
export function closeCreateConversationModal() {
  return {
    type: CLOSE_CREATE_CONVERSATION_MODAL,
  };
}

export const START_REQUEST_CONVERSATION = 'START-REQUEST-CONVERSATION';
export function startRequestConversation() {
  return {
    type: START_REQUEST_CONVERSATION,
  };
}

export const LOAD_CONVERSATIONS = 'LOAD-CONVERSATIONS';
export function loadConversations(conversations) {
  return {
    type: LOAD_CONVERSATIONS,
    conversations: conversations,
  };
}

export function requestConversations() {
  return dispatch => {
    dispatch(startRequestConversation());

    return axios.get('/conversations/json')
      .then(({data}) => {
        console.log(data);
        dispatch(loadConversations(data));
      });
  };
}

export const START_REQUEST_USERS = 'REQUEST-USERS';
export function startRequestUsers() {
  return {
    type: START_REQUEST_USERS,
  };
}

export const LOAD_USERS = 'LOAD-USERS';
export function loadUsers(users) {
  return {
    type: LOAD_USERS,
    users: users,
  };
}

export function requestUsers() {
  return dispatch => {
    dispatch(startRequestUsers());

    return axios.get('/users')
      .then(({data}) => {
        let users = {};
        data.map(u => users[u.id] = u);
        dispatch(loadUsers(users));
      });
  }
}