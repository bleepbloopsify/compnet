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