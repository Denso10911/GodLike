import React from 'react'
import User from './User/User'
import './Users.css'
import preloadingImg from '../../../assets/images/Preloader.svg'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className="users_page">
      <div className="fetching">
        <img src={props.isFetching ? preloadingImg : null} alt="" />
      </div>
      <div className="pages">
        {pages
          .map((n) => {
            return (
              <span
                className={props.currentPage === n ? 'select' : ''}
                onClick={() => {
                  props.onChangePageClick(n)
                }}
                key={n}
              >
                {' '}
                {n}{' '}
              </span>
            )
          })
          .slice(0, 5)}
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
                  props.unFollowUserA(u.id)
                }}
                className="button__unfollow"
              >
                UNFOLLOW
              </button>
            ) : (
              <button
                onClick={() => {
                  props.followUserA(u.id)
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
