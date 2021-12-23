import { profileAPI } from '../api/api'

const SET_USER_INFORMATION = 'SET_USER_INFORMATION'

let initialState = {
  profile: null,
}

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFORMATION:
      return {
        ...state,
        profile: action.profile,
      }

    default:
      return state
  }
}

export const setUserInformation = (profile) => ({
  type: SET_USER_INFORMATION,
  profile,
})

export const getProfileThunk = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((response) => {
    //Функция которая делает запрос на сервер
    dispatch(setUserInformation(response.data)) // Колбек функция которая диспатчит информацию о конкретном пользователе
  })
}

export default ProfileReducer
