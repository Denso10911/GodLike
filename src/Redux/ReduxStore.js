import { createStore, combineReducers } from 'redux'
import ForumReducer from './ForumReducer'
import MessagesReducer from './MessagesReducer'

let reducers = combineReducers({
  messages: MessagesReducer,
  forum: ForumReducer,
})

let store = createStore(reducers)

export default store
