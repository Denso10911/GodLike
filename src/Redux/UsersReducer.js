const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const TOTAL_COUNT = 'TOTAL_COUNT'
const CURRENT_PAGE = 'CURRENT_PAGE'

let initialState = {
  users: [],
  totalUsersCount: 20,
  pageSize: 5,
  currentPage: 1,
}
const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      }
    case TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      }
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    default:
      return state
  }
}

export const followUserAC = (id) => ({ type: FOLLOW, id })
export const unFollowUserAC = (id) => ({ type: UNFOLLOW, id })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const currentPageAC = (currentPage) => ({
  type: CURRENT_PAGE,
  currentPage,
})
export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: TOTAL_COUNT,
  totalUsersCount,
})

export default UsersReducer
