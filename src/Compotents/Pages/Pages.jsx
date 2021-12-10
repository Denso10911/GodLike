import { Switch, Route } from 'react-router-dom'

import MainPage from './MainPage/MainPage'
import Forum from './Forum/Forum'
import MessagesContainer from './Messages/MessagesContainer'

const Pages = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
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
