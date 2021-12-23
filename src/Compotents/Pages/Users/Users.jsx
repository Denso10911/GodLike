import React from 'react'
import User from './User/User'
import './Users.css'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 3200; i <= pagesCount; i++) {
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
              {` ${n} `}
            </span>
          )
        })}
      </div>
      <div className="users" style={props.isFetching ? { opacity: 0 } : { opacity: 1 }}>
        {props.users.map((u) => (
          <div className="user" key={u.id}>
            <User userInfo={u} />
            {u.followed ? (
              <button
                onClick={() => {
                  props.unFollowThunk(u.id)
                }}
                className="button__unfollow"
                disabled={props.statusOfFallowingRequest.some((id) => id === u.id)}
              >
                UNFOLLOW
              </button>
            ) : (
              <button
                onClick={() => {
                  props.followThunk(u.id)
                }}
                className="button__follow"
                disabled={props.statusOfFallowingRequest.some((id) => id === u.id)}
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
