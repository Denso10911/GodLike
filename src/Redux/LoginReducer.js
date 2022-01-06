import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'

const SET_LOGIN_USER_DATA = 'SET_LOGIN_USER_DATA'

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
}

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_USER_DATA:
      return {
        ...state,
        ...action.data,
      }

    default:
      return state
  }
}
export const setLoginUserData = (id, login, email, isAuth) => ({
  type: SET_LOGIN_USER_DATA,
  data: { id, login, email, isAuth },
})

export const authMeThunk = () => (dispatch) => {
  return authAPI.getAuth().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data
      dispatch(setLoginUserData(id, login, email, true))
    }
  })
}

export const authLoginThunk = (value) => (dispatch) => {
  authAPI.postAuthLogin(value).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(authMeThunk())
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
      dispatch(stopSubmit('login', { _error: message }))
    }
  })
}
export const authDeleteLoginThunk = () => (dispatch) => {
  authAPI.deleteAuthLogin().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setLoginUserData(null, null, null, false))
    }
  })
}

export default LoginReducer
