import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import Fetching from '../../../assets/Fetching/Fetching'
import { withAuthRedirecrt } from '../../../hoc/AuthHoc'
import { getProfileThunk, getUserStatusThunk, updateUserStatusThunk } from '../../../Redux/ProfileReducer'
import Profile from './Profile'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.myId
    }
    this.props.getProfileThunk(userId)
    this.props.getUserStatusThunk(userId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.getProfileThunk(this.props.myId)
      this.props.getUserStatusThunk(this.props.myId)
    }
  }

  render() {
    return <>{this.props.isFetching ? <Fetching /> : <Profile profile={this.props.profile} status={this.props.status} updateUserStatusThunk={this.props.updateUserStatusThunk} />}</>
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isFetching: state.profilePage.isFetching,
    myId: state.login.id,
  }
}

export default compose(
  connect(mapStateToProps, {
    getProfileThunk,
    getUserStatusThunk,
    updateUserStatusThunk,
  }),
  withRouter,
  withAuthRedirecrt
)(ProfileContainer)
