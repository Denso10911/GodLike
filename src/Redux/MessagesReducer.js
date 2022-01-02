const NEW_MESSAGE = 'NEW-MESSAGE'

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
}

const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      let message = {
        id: state.dialogs.length + 1,
        text: action.message,
      }
      return {
        ...state,
        dialogs: [...state.dialogs, message],
      }

    default:
      return state
  }
}

export const sentNewMessageActionCreator = (message) => ({ type: NEW_MESSAGE, message })

export default MessagesReducer
