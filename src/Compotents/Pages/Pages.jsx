import { Switch, Route } from 'react-router-dom'

import MainPage from './MainPage/MainPage'
import Messages from './Messages/Messages'
import Forum from './Forum/Forum'

const Pages = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/forum">
        <Forum forum={props.state.forum} dispatch={props.dispatch} />
      </Route>
      <Route path="/messages">
        <Messages messages={props.state.messages} dispatch={props.dispatch} />
      </Route>
    </Switch>
  )
}

export default Pages
