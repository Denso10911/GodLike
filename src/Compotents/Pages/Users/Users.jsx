import React from 'react'
import User from './User/User'
import './Users.css'

const Users = (props) => {
  let users = props.users.map((u) => {
    return (
      <div className="user" key={u.userId}>
        <User userInfo={u} />
        {u.myFriend ? (
          <button
            onClick={() => {
              props.unFollowUserA(u.userId)
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => {
              props.followUserA(u.userId)
            }}
          >
            Follow
          </button>
        )}
      </div>
    )
  })

  return <div className="users">{users}</div>
}

export default Users
