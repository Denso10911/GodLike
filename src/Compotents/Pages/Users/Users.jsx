import React from 'react'
import User from './User/User'
import './Users.css'
import { followAPI } from '../../../api/api'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div className="users_page">
      <div className="pages">
        {pages.map((n) => {
          return (
            <span
              className={props.currentPage === n ? 'select' : 'noSelect'}
              onClick={() => {
                props.onChangePageClick(n)
              }}
              key={n}
            >
              {' '}
              {n}{' '}
            </span>
          )
        })}
      </div>
      <div
        className="users"
        style={props.isFetching ? { opacity: 0 } : { opacity: 1 }}
      >
        {props.users.map((u) => (
          <div className="user" key={u.id}>
            <User userInfo={u} />
            {u.followed ? (
              <button
                onClick={() => {
                  props.doFollowingRequest(true, u.id) // Функция которая блокирует нажатие кнопки пока выполняется запрос на сервер
                  followAPI.deleteFollow(u.id).then((response) => {
                    if (response.data.resultCode === 0) {
                      props.unFollowUser(u.id)
                    }
                    props.doFollowingRequest(false, u.id) // Функция которая разблокирует нажатие кнопки
                  })
                }}
                className="button__unfollow"
                disabled={props.statusOfFallowingRequest.some(
                  (id) => id === u.id
                )}
              >
                UNFOLLOW
              </button>
            ) : (
              <button
                onClick={() => {
                  props.doFollowingRequest(true, u.id) // Функция которая блокирует нажатие кнопки пока выполняется запрос на сервер
                  followAPI.postFollow(u.id).then((response) => {
                    if (response.data.resultCode === 0) {
                      props.followUser(u.id)
                    }
                    props.doFollowingRequest(false, u.id) // Функция которая разблокирует нажатие кнопки
                  })
                }}
                className="button__follow"
                disabled={props.statusOfFallowingRequest.some(
                  (id) => id === u.id
                )}
              >
                FOLLOW
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Users
