import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Login.module.css'
import React from 'react'

const Login = (props) => {
  return (
    <div className={style.links}>
      {props.isAuth ? (
        props.login
      ) : (
        <div className="sign-in-alt">
          <FontAwesomeIcon icon="sign-in-alt" />
        </div>
      )}
    </div>
  )
}

export default Login
