
const initialState = {
  selected_id: null,
  conversations: {
    1: {
      id: 1,
      display_name: "hello",
    }
  },
};

function rootReducer(state=initialState, action) {
  switch(action.type) {
  default:
    return state;
  }
}

export default rootReducer;