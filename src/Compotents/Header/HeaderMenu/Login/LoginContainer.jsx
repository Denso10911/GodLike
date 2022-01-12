import { connect } from "react-redux";
import Login from "./Login";
import React from "react";
import {
  authMeThunk,
  authDeleteLoginThunk,
} from "../../../../Redux/LoginReducer";

const LoginContainer = (props) => {
  return <Login {...props} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.login.isAuth,
    login: state.login.login,
  };
};

export default connect(mapStateToProps, { authMeThunk, authDeleteLoginThunk })(
  LoginContainer
);
