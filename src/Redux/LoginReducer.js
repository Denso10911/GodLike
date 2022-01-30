import { stopSubmit } from "redux-form";
import { authAPI, captchaAPI } from "../api/api";

const SET_LOGIN_USER_DATA = "SET_LOGIN_USER_DATA";
const SET_CAPTCHA = "SET_CAPTCHA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captcha: null,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.captcha,
      };

    default:
      return state;
  }
};
export const setLoginUserData = (id, login, email, isAuth) => ({
  type: SET_LOGIN_USER_DATA,
  data: { id, login, email, isAuth },
});
export const setCaptcha = (captcha) => ({
  type: SET_CAPTCHA,
  captcha,
});

export const authMeThunk = () => (dispatch) => {
  return authAPI.getAuth().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setLoginUserData(id, login, email, true));
    }
  });
};

export const authLoginThunk = (value) => (dispatch) => {
  authAPI.postAuthLogin(value).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(authMeThunk());
    } else if (response.data.resultCode === 10) {
      dispatch(setCaptchaThunk());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some Error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  });
};

export const authDeleteLoginThunk = () => (dispatch) => {
  authAPI.deleteAuthLogin().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setLoginUserData(null, null, null, false));
    }
  });
};

export const setCaptchaThunk = () => (dispatch) => {
  captchaAPI.getCaptcha().then((response) => {
    dispatch(setCaptcha(response.data.url));
  });
};

export default LoginReducer;
