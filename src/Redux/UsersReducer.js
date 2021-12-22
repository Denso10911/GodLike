const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const TOTAL_COUNT = 'TOTAL_COUNT'
const CURRENT_PAGE = 'CURRENT_PAGE'
const IS_FETCHING = 'IS_FETCHING'
const DO_FOLLOWING_REQUEST = 'DO_FOLLOWING_REQUEST'

let initialState = {
  users: [],
  totalUsersCount: 20,
  pageSize: 5,
  currentPage: 1,
  isFetching: false,
  statusOfFallowingRequest: [],
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
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case DO_FOLLOWING_REQUEST:
      return {
        ...state,
        statusOfFallowingRequest: action.statusOfFallowingRequest
          ? [...state.statusOfFallowingRequest, action.userId]
          : [
              state.statusOfFallowingRequest.filter(
                (id) => id !== action.userId
              ),
            ],
      }
    default:
      return state
  }
}

export const followUser = (id) => ({ type: FOLLOW, id })
export const unFollowUser = (id) => ({ type: UNFOLLOW, id })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const doFollowingRequest = (statusOfFallowingRequest, userId) => ({
  type: DO_FOLLOWING_REQUEST,
  statusOfFallowingRequest,
  userId,
})
export const setCurrentPage = (currentPage) => ({
  type: CURRENT_PAGE,
  currentPage,
})
export const setTotalUsersCount = (totalUsersCount) => ({
  type: TOTAL_COUNT,
  totalUsersCount,
})
export const setFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
})
export default UsersReducer
