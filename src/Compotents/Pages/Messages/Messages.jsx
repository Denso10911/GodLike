import './Messages.css'
import List from './List/List'
import Dialog from './Dialog/Dialog'
import React from 'react'
import SendMessageFormRedux from './SendMessageForm/SendMessageForm'

const Messages = (props) => {
  let listsElement = props.messages.lists.map((l) => <List name={l.name} id={l.id} />)
  let dialogElement = props.messages.dialogs.map((d) => <Dialog text={d.text} />)

  let onMessageSentClick = (message) => props.sentNewMessageAction(message.message)

  return (
    <div className='messages'>
      <div className='list'>{listsElement}</div>
      <div className='dialog__wraper'>
        <div className='dialog'>{dialogElement}</div>
        <SendMessageFormRedux onSubmit={onMessageSentClick} />
      </div>
    </div>
  )
}

export default Messages
