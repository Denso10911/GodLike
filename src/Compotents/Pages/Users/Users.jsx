import React from 'react'
import User from './User/User'
import './Users.css'
import * as axios from 'axios'

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onChangePageClick = (n) => {
    this.props.currentPageA(n)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${n}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div className="users_page">
        <div className="pages">
          {pages
            .map((n) => {
              return (
                <span
                  className={this.props.currentPage === n && 'select'}
                  onClick={() => {
                    this.onChangePageClick(n)
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
        <div className="users">
          {this.props.users.map((u) => (
            <div className="user" key={u.id}>
              <User userInfo={u} />
              {u.followed ? (
                <button
                  onClick={() => {
                    this.props.unFollowUserA(u.id)
                  }}
                  className="button__unfollow"
                >
                  UNFOLLOW
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.followUserA(u.id)
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
}

export default Users
