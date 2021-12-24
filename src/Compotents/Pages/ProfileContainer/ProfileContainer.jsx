import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { getProfileThunk } from '../../../Redux/ProfileReducer'
import Profile from './Profile'

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfileThunk(this.props.match.params.userId)
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'} />
    return <Profile profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.login.isAuth,
  }
}

let WithRouterProfileContainer = withRouter(ProfileContainer) //компонент более высокого порядка, который будет передавать ближайшие route match, current locationи historyprops обернутому компоненту при каждом рендеринге

export default connect(mapStateToProps, {
  getProfileThunk,
})(WithRouterProfileContainer)
