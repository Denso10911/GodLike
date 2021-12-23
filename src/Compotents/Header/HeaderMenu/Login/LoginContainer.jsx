import { connect } from 'react-redux'
import Login from './Login'
import React from 'react'
import { authMeThunk } from '../../../../Redux/LoginReducer'

class LoginContainer extends React.Component {
  componentDidMount() {
    this.props.authMeThunk()
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

export default connect(mapStateToProps, { authMeThunk })(LoginContainer)
