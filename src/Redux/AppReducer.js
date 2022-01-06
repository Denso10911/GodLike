import { authMeThunk } from './LoginReducer'

const SET_INITIALLIZING = 'SET_INITIALLIZING'

let initialState = {
  initiallizing: false,
}

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALLIZING:
      return {
        ...state,
        initiallizing: true,
      }

    default:
      return state
  }
}

export const setInitiallizing = () => ({ type: SET_INITIALLIZING })

export const initiallizingAppThunk = () => (dispatch) => {
  let promise = dispatch(authMeThunk())
  console.log(promise)
  Promise.all([promise]).then(() => {
    dispatch(setInitiallizing())
  })
}
export default AppReducer
