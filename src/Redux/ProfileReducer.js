import { profileAPI } from '../api/api'

const SET_USER_INFORMATION = 'SET_USER_INFORMATION'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
  profile: null,
  status: '',
}

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFORMATION:
      return {
        ...state,
        profile: action.profile,
      }
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      }

    default:
      return state
  }
}

export const setUserInformation = (profile) => ({
  type: SET_USER_INFORMATION,
  profile,
})

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
})

export const getProfileThunk = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((response) => {
    //Функция которая делает запрос на сервер
    dispatch(setUserInformation(response.data)) // Колбек функция которая диспатчит информацию о конкретном пользователе
  })
}
export const getUserStatusThunk = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    //Функция которая делает запрос на сервер
    dispatch(setUserStatus(response.data)) // Колбек функция которая диспатчит информацию о конкретном пользователе
  })
}

export const updateUserStatusThunk = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      //Функция которая делает запрос на сервер
      dispatch(setUserStatus(status)) // Колбек функция которая диспатчит информацию о конкретном пользователе
    }
  })
}
export default ProfileReducer
