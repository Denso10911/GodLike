import React from 'react'
import { connect } from 'react-redux'
import { authLoginThunk } from '../../Redux/LoginReducer'
import { LoginReduxForm } from './LoginForm'

class LoginFormContainer extends React.Component {
  submit = (values) => {
    // print the form values to the console
    this.props.authLoginThunk(values)
  }
  render() {
    return <LoginReduxForm onSubmit={this.submit} />
  }
}

const mapStateToProps = () => {}

export default connect(mapStateToProps, { authLoginThunk })(LoginFormContainer)
