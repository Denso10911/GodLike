import { applyMiddleware, createStore, combineReducers } from 'redux'
import ForumReducer from './ForumReducer'
import LoginReducer from './LoginReducer'
import MessagesReducer from './MessagesReducer'
import ProfileReducer from './ProfileReducer'
import UsersReducer from './UsersReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  usersPage: UsersReducer,
  messagesPage: MessagesReducer,
  forumPage: ForumReducer,
  profilePage: ProfileReducer,
  login: LoginReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
