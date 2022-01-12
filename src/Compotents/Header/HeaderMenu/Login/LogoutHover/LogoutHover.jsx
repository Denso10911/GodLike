import React from "react";
import "./LogoutHover.css";

const LogoutHover = ({ login, authDeleteLoginThunk }) => (
  <div className='logout'>
    {login}
    <div className='login__hover'>
      <span className='delete' onClick={authDeleteLoginThunk}>
        Logout
      </span>
    </div>
  </div>
);

export default LogoutHover;
