import { sentNewPost } from '../../../Redux/ForumReducer'
import { connect } from 'react-redux'
import React from 'react'
import Forum from './Forum'
import { compose } from 'redux'
import { withAuthRedirecrt } from '../../../hoc/AuthHoc'
// import { withAuthRedirecrt } from '../../../hoc/AuthHoc'

class ForumContainer extends React.Component {
  render() {
    return <Forum {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    forum: state.forumPage,
    isAuth: state.login.isAuth,
  }
}

export default compose(connect(mapStateToProps, { sentNewPost }), withAuthRedirecrt)(ForumContainer)
