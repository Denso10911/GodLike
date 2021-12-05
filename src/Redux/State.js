import ForumReducer from './ForumReducer'
import MessagesReducer from './MessagesReducer'

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
    this._state.messages = MessagesReducer(this._state.messages, action)
    this._state.forum = ForumReducer(this._state.forum, action)

    this._callSubscriber(this._state)
  },
}

export default store
