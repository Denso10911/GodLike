import { Switch, Route } from 'react-router-dom'

import MainPage from './MainPage/MainPage'
import MessagesContainer from './Messages/MessagesContainer'
import UsersContainer from './Users/UsersContainer'
import ProfileContainer from './ProfileContainer/ProfileContainer'
import LoginForm from '../LoginForm/LoginForm'
import ForumContainer from './Forum/ForumContainer'

const Pages = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <MainPage />
      </Route>
      <Route path={'/profile/:userId?'}>
        <ProfileContainer />
      </Route>
      <Route path='/friends'>
        <UsersContainer />
      </Route>
      <Route path='/forum'>
        <ForumContainer />
      </Route>
      <Route path='/messages'>
        <MessagesContainer />
      </Route>
      <Route path='/login'>
        <LoginForm />
      </Route>
    </Switch>
  )
}

export default Pages
