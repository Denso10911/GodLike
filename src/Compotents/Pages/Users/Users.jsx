import React from "react";
import FollowButtons from "./FollowButtons/FollowButtons";
import User from "./User/User";
import "./Users.css";
import UsersPages from "./UsersPages/UsersPages";
import UsersPageSettings from "./UsersPageSettings/UsersPageSettings";

const Users = (props) => {
  return (
    <div className='users_page'>
      <div className='usersPage__settings'>
        <UsersPageSettings
          setPageSize={props.setPageSize}
          pageSize={props.pageSize}
          setPageStyle={props.setPageStyle}
          pageStyle={props.pageStyle}
        />
      </div>
      <div className='usersPage__pages'>
        <UsersPages
          totalUsersCount={props.totalUsersCount}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          onChangePageClick={props.onChangePageClick}
        />
      </div>
      <div className={props.pageStyle ? "users-blocks" : "users-lines"}>
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
