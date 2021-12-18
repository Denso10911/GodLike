import { createStore, combineReducers } from 'redux'
import ForumReducer from './ForumReducer'
import MessagesReducer from './MessagesReducer'
import ProfileReducer from './ProfileReducer'
import UsersReducer from './UsersReducer'

let reducers = combineReducers({
  usersPage: UsersReducer,
  messagesPage: MessagesReducer,
  forumPage: ForumReducer,
  profilePage: ProfileReducer,
})

let store = createStore(reducers)

export default store
