import { combineReducers } from 'redux';

import modal from './modal';

import { SELECTED_CONVERSATION } from '../actions';

function selected_id(state = null, action) {
  switch(action.type){
  case SELECTED_CONVERSATION:
    return action.conversation_id;
  default:
    return state;
  }
}

function users(state={1: {id:1, display_name:'leon', }, }, action) {
  switch(action.type) {
  default:
    return state
  }
}

function conversations(state={1: { id: 1, display_name: "hello", } }, action) {
  switch(action.type) {
  default:
    return state;
  }
}

export default combineReducers({
  selected_id,
  conversations,
  modal,
  users,
});