import './LoginForm.css'

const LoginForm = (props) => {
  return (
    <div className="loginForm">
      <form action="#" className="loginForm__container">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="phone" placeholder="number" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default LoginForm
