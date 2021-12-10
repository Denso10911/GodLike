const NEW_MESSAGE = 'NEW-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
  lists: [
    { id: 1, name: 'Denso' },
    { id: 2, name: 'Nina' },
    { id: 3, name: 'Yan' },
    { id: 4, name: 'Work' },
    { id: 5, name: 'JS' },
    { id: 6, name: 'panni' },
  ],
  dialogs: [
    { id: 1, text: 'hi' },
    { id: 2, text: 'How are you' },
    { id: 3, text: 'by' },
  ],
  newMessageText: '',
}

const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE: {
      let message = {
        id: state.dialogs.length + 1,
        text: state.newMessageText,
      }

      let stateCopy = { ...state }
      stateCopy.dialogs = [...state.dialogs]
      stateCopy.dialogs.push(message)
      stateCopy.newMessageText = ''
      return stateCopy
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state }
      stateCopy.newMessageText = action.newText
      return stateCopy
    }
    default:
      return state
  }
}

export const sentNewMessageActionCreator = () => ({ type: NEW_MESSAGE })
export const updateNewTextMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
})

export default MessagesReducer
