import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Login.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = (props) => {
  return (
    <div className={style.links}>
      {props.isAuth ? (
        props.login
      ) : (
        <div className={style.signInAlt}>
          <NavLink to={'/login'}>
            <FontAwesomeIcon icon="sign-in-alt" />
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Login
