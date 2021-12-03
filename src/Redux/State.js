const NEW_MESSAGE = 'NEW-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
  _state: {
    messages: {
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
      newMessageText: 'Write your message',
    },

    forumToopicsData: ['Clan', 'Guides and Tutorials', 'Tavern'],
  },

  getState() {
    return this._state
  },

  _callSubscriber() {
    console.log('state')
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if (action.type === 'NEW-MESSAGE') {
      let message = {
        id: this._state.messages.dialogs.length + 1,
        text: this._state.messages.newMessageText,
      }
      this._state.messages.dialogs.push(message)
      this._state.messages.newMessageText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.messages.newMessageText = action.newText
      this._callSubscriber(this._state)
    }
  },
}

export const newMessageAction = () => ({ type: NEW_MESSAGE })
export const onMessageChangeAction = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
})

export default store
