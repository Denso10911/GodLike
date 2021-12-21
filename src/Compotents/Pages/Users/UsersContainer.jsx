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
import Users from './Users'
import Fetching from '../../../assets/Fetching/Fetching'
import { usersAPI } from '../../../api/api'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setFetching(true) //Во время начала запроса отображается крутилка

    usersAPI
      .getUsers(this.props.pageSize, this.props.currentPage) //Функция которая делает запрос на сервер
      .then((response) => {
        this.props.setFetching(false) //После получения ответа сервера крутилка исчезает
        this.props.setUsers(response.data.items) // Колбек функция которая диспатчит пользователей страници по дефолту
        this.props.setTotalUsersCount(response.data.totalCount) // Колбек функция которая диспатчит общую сумму пользователей
      })
  }

  onChangePageClick = (n) => {
    // Функция принимающая в параметре номер страници, делает запрос на сервер и возвращает пользователей этой страници
    this.props.setFetching(true) //Во время начала запроса отображается крутилка
    this.props.setCurrentPage(n) //Колбек функция которая диспатчит выбраную страницу
    usersAPI
      .getUsers(this.props.pageSize, this.props.currentPage) //Функция которая делает запрос на сервер
      .then((response) => {
        this.props.setFetching(false) //После получения ответа сервера крутилка исчезает
        this.props.setUsers(response.data.items) // Колбек функция которая диспатчит пользователей выбраной страници
      })
  }

  render() {
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
  }
}

export default connect(mapStateToProps, {
  followUser,
  unFollowUser,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setFetching,
})(UsersContainer)
