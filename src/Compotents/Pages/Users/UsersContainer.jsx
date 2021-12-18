import React from 'react'
import { connect } from 'react-redux'
import {
  setCurrentPage,
  followUser,
  setFetching,
  setTotalUsersCount,
  setUsers,
  unFollowUser,
} from '../../../Redux/UsersReducer'
import * as axios from 'axios'
import Users from './Users'
import Fetching from '../../../assets/Fetching/Fetching'

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
    this.props.setCurrentPage(n)
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
      <>
        {this.props.isFetching ? <Fetching /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          isFetching={this.props.isFetching}
          users={this.props.users}
          currentPage={this.props.currentPage}
          setCurrentPage={this.props.setCurrentPage}
          onChangePageClick={this.onChangePageClick}
          unFollowUser={this.props.unFollowUser}
          followUser={this.props.followUser}
        />
      </>
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

export default connect(mapStateToProps, {
  followUser,
  unFollowUser,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setFetching,
})(UsersComponent)
