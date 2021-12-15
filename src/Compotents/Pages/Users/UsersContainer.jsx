import { connect } from 'react-redux'
import {
  currentPageAC,
  followUserAC,
  setTotalUsersCountAC,
  setUsersAC,
  unFollowUserAC,
} from '../../../Redux/UsersReducer'
import Users from './Users'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
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
    setTotalUsersCount: (totalUsersCount) => {
      let action = setTotalUsersCountAC(totalUsersCount)
      dispatch(action)
    },
    currentPageA: (currentPage) => {
      let action = currentPageAC(currentPage)
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
