import { connect } from 'react-redux'
import {
  followUserAC,
  setUsersAC,
  unFollowUserAC,
} from '../../../Redux/UsersReducer'
import Users from './Users'

const mapStateToProps = (state) => {
  console.log(state.usersPage.users)
  return {
    users: state.usersPage.users,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followUserA: (id) => {
      let action = followUserAC(id)
      dispatch(action)
    },
    unFollowUserA: (id) => {
      let action = unFollowUserAC(id)
      dispatch(action)
    },
    setUsers: (users) => {
      let action = setUsersAC(users)
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
