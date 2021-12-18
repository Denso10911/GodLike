import { Switch, Route } from 'react-router-dom'

import MainPage from './MainPage/MainPage'
import Forum from './Forum/Forum'
import MessagesContainer from './Messages/MessagesContainer'
import UsersContainer from './Users/UsersContainer'
import ProfileContainer from './ProfileContainer/ProfileContainer'

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/profile/:userId">
        <ProfileContainer />
      </Route>
      <Route path="/friends">
        <UsersContainer />
      </Route>
      <Route path="/forum">
        <Forum />
      </Route>
      <Route path="/messages">
        <MessagesContainer />
      </Route>
    </Switch>
  )
}

export default Pages
