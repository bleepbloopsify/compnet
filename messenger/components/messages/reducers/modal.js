import { OPEN_CREATE_CONVERSATION_MODAL, CLOSE_CREATE_CONVERSATION_MODAL } from '../actions';

const initialState = {
  open: false,
}

export default function modal(state = initialState, action) {
  switch(action.type) {
  case OPEN_CREATE_CONVERSATION_MODAL:
    return Object.assign({}, state, {
      open: true,
    });
  case CLOSE_CREATE_CONVERSATION_MODAL:
    return Object.assign({}, state, {
      open: false,
    });
  default:
    return state;
  }
}