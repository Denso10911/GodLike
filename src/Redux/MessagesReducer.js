const NEW_MESSAGE = 'NEW-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const MessagesReducer = (state, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      let message = {
        id: state.dialogs.length + 1,
        text: state.newMessageText,
      }
      state.dialogs.push(message)
      state.newMessageText = ''
      return state
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText
      return state
    default:
      return state
  }
}

export const newMessageAction = () => ({ type: NEW_MESSAGE })
export const onMessageChangeAction = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
})

export default MessagesReducer
