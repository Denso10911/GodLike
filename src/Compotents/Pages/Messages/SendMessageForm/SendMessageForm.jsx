import { Field, reduxForm } from 'redux-form'

const SendMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='sentArea'>
      <Field name='message' component='textarea' placeholder='Write your message' />
      <button>Send</button>
    </form>
  )
}
const SendMessageFormRedux = reduxForm({ form: 'forumAddMessageForm' })(SendMessageForm)

export default SendMessageFormRedux
