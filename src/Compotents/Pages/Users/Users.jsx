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
                  followAPI.deleteFollow(u.id).then((response) => {
                    if (response.data.resultCode === 0) {
                      props.unFollowUser(u.id)
                    }
                  })
                }}
                className="button__unfollow"
              >
                UNFOLLOW
              </button>
            ) : (
              <button
                onClick={() => {
                  followAPI.postFollow(u.id).then((response) => {
                    if (response.data.resultCode === 0) {
                      props.followUser(u.id)
                    }
                  })
                }}
                className="button__follow"
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
