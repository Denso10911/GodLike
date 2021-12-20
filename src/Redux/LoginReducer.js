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
        isAuth: true,
      }

    default:
      return state
  }
}
export const setLoginUserData = (id, login, email) => ({
  type: SET_LOGIN_USER_DATA,
  data: { id, login, email },
})

export default LoginReducer
