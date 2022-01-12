import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Login.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import LogoutHover from "./LogoutHover/LogoutHover";

const Login = (props) => {
  if (props.isAuth) {
    return (
      <LogoutHover
        login={props.login}
        authDeleteLoginThunk={props.authDeleteLoginThunk}
      />
    );
  } else {
    return (
      <div className={style.links}>
        <div className={style.signInAlt}>
          <NavLink to={"/login"}>
            <FontAwesomeIcon icon='sign-in-alt' />
          </NavLink>
        </div>
      </div>
    );
  }
};

export default Login;
