import { Field, reduxForm } from 'redux-form'
import renderField from '../../assets/RenderField/RenderField'
import { email, maxLength, required } from '../../assets/RenderField/RequiredForm'
import './LoginForm.css'

const maxLength25 = maxLength(25)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='loginForm__container'>
      <div className='loginForm_title'>
        <h1>Login</h1>
      </div>
      <div className='loginForm__inputs'>
        <Field name='Email' component={renderField} type='email' label='Email' validate={[required, email]} className='loginForm__input' />
      </div>
      <div className='loginForm__inputs'>
        <Field name='Password' component={renderField} type='password' label='Password' validate={[required, maxLength25]} className='loginForm__input' />
      </div>
      <div className='loginForm__checkBox'>
        <Field name='RememberMe' component={renderField} type='checkbox' className='checkBox' /> Remember me
      </div>
      {props.error ? <div className='formError'>{props.error}</div> : ''}
      <div className='loginForm__button'>
        <button>Send</button>
      </div>
    </form>
  )
}

export default LoginForm

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
