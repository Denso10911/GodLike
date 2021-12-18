import * as axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setUserInformation } from '../../../Redux/ProfileReducer'
import Profile from './Profile'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserInformation(response.data)
      })
  }

  render() {
    return <Profile profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
  setUserInformation,
})(WithRouterProfileContainer)
