export const SELECTED_CONVERSATION = 'SELECTED-CONVERSATION';
export function selectConversation(conversation_id) {
  return {
    type: SELECTED_CONVERSATION,
    conversation_id: conversation_id,
  };
}