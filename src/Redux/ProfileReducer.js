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

export default ProfileReducer
