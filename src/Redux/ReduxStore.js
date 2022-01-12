import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import ForumReducer from "./ForumReducer";
import LoginReducer from "./LoginReducer";
import MessagesReducer from "./MessagesReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import AppReducer from "./AppReducer";

let reducers = combineReducers({
  usersPage: UsersReducer,
  messagesPage: MessagesReducer,
  forumPage: ForumReducer,
  profilePage: ProfileReducer,
  login: LoginReducer,
  form: formReducer,
  app: AppReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
