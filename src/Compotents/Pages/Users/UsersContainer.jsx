import React from 'react'
import { connect } from 'react-redux'
import { unFollowThunk, followThunk, getUsersThunk, changePageThunk } from '../../../Redux/UsersReducer'
import Users from './Users'
import Fetching from '../../../assets/Fetching/Fetching'
import { Redirect } from 'react-router-dom'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.pageSize, this.props.currentPage)
  }

  onChangePageClick = (selectedPage) => {
    // Функция принимающая в параметре номер страници, делает запрос на сервер и возвращает пользователей этой страници
    this.props.changePageThunk(selectedPage, this.props.pageSize)
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'} />
    return (
      <>
        {this.props.isFetching ? <Fetching /> : null}
        <Users {...this.props} onChangePageClick={this.onChangePageClick} />
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
    statusOfFallowingRequest: state.usersPage.statusOfFallowingRequest,
    isAuth: state.login.isAuth,
  }
}

export default connect(mapStateToProps, {
  unFollowThunk,
  followThunk,
  getUsersThunk,
  changePageThunk,
})(UsersContainer)
