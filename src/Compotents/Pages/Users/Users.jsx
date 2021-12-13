import React from 'react'
import User from './User/User'
import './Users.css'
import * as axios from 'axios'

const Users = (props) => {
  if (props.users.length === 4) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users?count=5')
      .then((response) => {
        props.setUsers(response.data.items)
      })
  }
  let users = props.users.map((u) => {
    return (
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
    )
  })

  return <div className="users">{users}</div>
}

export default Users
