import React from 'react'
import {
  newMessageAction,
  onMessageChangeAction,
} from '../../../Redux/MessagesReducer'
import Messages from './Messages'

const MessagesContainer = (props) => {
  let state = props.store.getState()

  let sentMessage = () => props.store.dispatch(newMessageAction())

  let onMessageChange = (text) => {
    props.store.dispatch(onMessageChangeAction(text))
  }

  return (
    <Messages
      onMessageChangeAction={onMessageChange}
      newMessageAction={sentMessage}
      messages={state.messages}
    />
  )
}

export default MessagesContainer
