import React from "react";
import FollowButtons from "./FollowButtons/FollowButtons";
import User from "./User/User";
import "./Users.css";
import UsersPages from "./UsersPages/UsersPages";

const Users = (props) => {
  return (
    <div className='users_page'>
      <UsersPages
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onChangePageClick={props.onChangePageClick}
      />
      <div className='users'>
        {props.users.map((u) => (
          <div className='user' key={u.id}>
            <User userInfo={u} setFetching={props.setFetching} />
            <FollowButtons
              userInfo={u}
              unFollowThunk={props.unFollowThunk}
              followThunk={props.followThunk}
              statusOfFallowingRequest={props.statusOfFallowingRequest}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;
