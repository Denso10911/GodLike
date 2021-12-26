import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

let mapStateToPropsAuthRedirect = (state) => {
  return {
    isAuth: state.login.isAuth,
  }
}

export const withAuthRedirecrt = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/login'} />
      return <Component {...this.props} />
    }
  }

  let ConectedAuthRedirectComponent = connect(mapStateToPropsAuthRedirect)(RedirectComponent)

  return ConectedAuthRedirectComponent
}
