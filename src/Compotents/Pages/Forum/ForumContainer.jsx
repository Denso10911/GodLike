import { sentNewPost, updateNewPostText } from '../../../Redux/ForumReducer'
import { connect } from 'react-redux'
import React from 'react'
import Forum from './Forum'
import { Redirect } from 'react-router-dom'

class ForumContainer extends React.Component {
  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'} />
    return <Forum {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    forum: state.forumPage,
    isAuth: state.login.isAuth,

}

export default connect(mapStateToProps, { sentNewPost, updateNewPostText })(ForumContainer)
