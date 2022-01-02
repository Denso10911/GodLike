import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='loginForm__container'>
      <div>
        <Field name='email' component='input' placeholder='Login' />
      </div>
      <div>
        <Field name='password' component='input' type='password' placeholder='Password' />
      </div>
      <div>
        <Field name='rememberMe' component='input' type='checkbox' /> Remember me
      </div>
      <button>Send</button>
    </form>
  )
}

export default LoginForm

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
