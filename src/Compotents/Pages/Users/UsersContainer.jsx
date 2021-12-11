import { connect } from 'react-redux'
import { followUserAC, unFollowUserAC } from '../../../Redux/UsersReducer'
import Users from './Users'

const mapStateToProps = (state) => {
  console.log(state.usersPage.users)
  return {
    users: state.usersPage.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followUserA: (userId) => {
      let action = followUserAC(userId)
      dispatch(action)
    },
    unFollowUserA: (userId) => {
      let action = unFollowUserAC(userId)
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
