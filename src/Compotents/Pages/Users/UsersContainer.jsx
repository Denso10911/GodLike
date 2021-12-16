import React from 'react'
import { connect } from 'react-redux'
import {
  currentPageAC,
  followUserAC,
  setFetchingAC,
  setTotalUsersCountAC,
  setUsersAC,
  unFollowUserAC,
} from '../../../Redux/UsersReducer'
import * as axios from 'axios'
import Users from './Users'

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.setFetching(true)

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onChangePageClick = (n) => {
    this.props.setFetching(true)
    this.props.currentPageA(n)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${n}`
      )
      .then((response) => {
        this.props.setFetching(false)
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onChangePageClick={this.onChangePageClick}
        unFollowUserA={this.props.unFollowUserA}
        followUserA={this.props.followUserA}
        isFetching={this.props.isFetching}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
    setFetching: (isFetching) => {
      let action = setFetchingAC(isFetching)
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent)
