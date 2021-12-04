const NEW_MESSAGE = 'NEW-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const NEW_POST = 'NEW-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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

    forum: {
      posts: [
        { id: 1, text: 'What are you thinking for', likes: 10 },
        { id: 2, text: 'About this game', likes: 15 },
      ],
      forumToopicsData: ['Clan', 'Guides and Tutorials', 'Tavern'],
      newPostText: '',
    },
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
    if (action.type === NEW_MESSAGE) {
      let message = {
        id: this._state.messages.dialogs.length + 1,
        text: this._state.messages.newMessageText,
      }
      this._state.messages.dialogs.push(message)
      this._state.messages.newMessageText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messages.newMessageText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === NEW_POST) {
      let post = {
        id: this._state.forum.posts.length + 1,
        text: this._state.forum.newPostText,
        likes: this._state.forum.posts.likes,
      }
      this._state.forum.posts.push(post)
      this._state.forum.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.forum.newPostText = action.newText
      this._callSubscriber(this._state)
    }
  },
}

export const newMessageAction = () => ({ type: NEW_MESSAGE })
export const onMessageChangeAction = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
})
export const newPostAction = () => ({ type: NEW_POST })
export const onPostChangeAction = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export default store
