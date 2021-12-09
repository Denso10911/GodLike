import store from './Redux/ReduxStore'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App
            state={state}
            dispatch={store.dispatch.bind(store)}
            store={store}
          />
        </Provider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  )
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})
