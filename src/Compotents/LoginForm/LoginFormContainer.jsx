import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { authLoginThunk } from '../../Redux/LoginReducer'
import { LoginReduxForm } from './LoginForm'

class LoginFormContainer extends React.Component {
  submit = (values) => {
    // print the form values to the console
    this.props.authLoginThunk(values)
  }

  render() {
    if (this.props.auth) {
      return <Redirect to='/' />
    }
    return <LoginReduxForm onSubmit={this.submit} />
  }
}

const mapStateToProps = (state) => ({
  auth: state.login.isAuth,
})

export default connect(mapStateToProps, { authLoginThunk })(LoginFormContainer)
