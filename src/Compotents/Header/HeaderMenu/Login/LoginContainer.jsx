import { connect } from 'react-redux'
import Login from './Login'
import * as axios from 'axios'
import React from 'react'
import { setLoginUserData } from '../../../../Redux/LoginReducer'

class LoginContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data
          this.props.setLoginUserData(id, login, email)
        }
      })
  }

  render() {
    return <Login {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.login.isAuth,
    login: state.login.login,
  }
}

export default connect(mapStateToProps, { setLoginUserData })(LoginContainer)
