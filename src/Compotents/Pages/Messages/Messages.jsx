import './Messages.css'
import List from './List/List'
import Dialog from './Dialog/Dialog'
import React from 'react'
import {
  newMessageAction,
  onMessageChangeAction,
} from '../../../Redux/MessagesReducer'

const Messages = (props) => {
  let listsElement = props.messages.lists.map((l) => (
    <List name={l.name} id={l.id} />
  ))
  let dialogElement = props.messages.dialogs.map((d) => (
    <Dialog text={d.text} />
  ))
  let sentAreaMessage = React.createRef()

  let sentMessage = () => props.dispatch(newMessageAction())

  let onMessageChange = () => {
    let text = sentAreaMessage.current.value
    props.dispatch(onMessageChangeAction(text))
  }

  return (
    <div className="messages">
      <div className="list">{listsElement}</div>
      <div className="dialog__wraper">
        <div className="dialog">{dialogElement}</div>
        <div className="sentArea">
          <textarea
            onChange={onMessageChange}
            ref={sentAreaMessage}
            value={props.messages.newMessageText}
          />
          <button onClick={sentMessage}></button>
        </div>
      </div>
    </div>
  )
}

export default Messages
