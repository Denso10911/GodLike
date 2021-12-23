import { usersAPI } from '../api/api'

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
        statusOfFallowingRequest: action.statusOfFallowingRequest ? [...state.statusOfFallowingRequest, action.userId] : [state.statusOfFallowingRequest.filter((id) => id !== action.userId)],
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

// Thunks

export const unFollowThunk = (userId) => (dispath) => {
  dispath(doFollowingRequest(true, userId))
  usersAPI.deleteFollow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispath(unFollowUser(userId))
    }
    dispath(doFollowingRequest(false, userId))
  })
}

export const followThunk = (userId) => (dispath) => {
  dispath(doFollowingRequest(true, userId))
  usersAPI.postFollow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispath(followUser(userId))
    }
    dispath(doFollowingRequest(false, userId))
  })
}

export const getUsersThunk = (pageSize, currentPage) => (dispath) => {
  dispath(setFetching(true)) //Во время начала запроса отображается крутилка

  usersAPI
    .getUsers(pageSize, currentPage) //Функция которая делает запрос на сервер
    .then((response) => {
      dispath(setFetching(false)) //После получения ответа сервера крутилка исчезает
      dispath(setUsers(response.data.items)) // Колбек функция которая диспатчит пользователей страници по дефолту
      dispath(setTotalUsersCount(response.data.totalCount)) // Колбек функция которая диспатчит общую сумму пользователей
    })
}

export const changePageThunk = (selectedPage, pageSize) => (dispath) => {
  dispath(setFetching(true)) //Во время начала запроса отображается крутилка
  dispath(setCurrentPage(selectedPage, pageSize)) //Колбек функция которая диспатчит выбраную страницу
  usersAPI
    .getUsers(pageSize, selectedPage) //Функция которая делает запрос на сервер
    .then((response) => {
      dispath(setFetching(false)) //После получения ответа сервера крутилка исчезает
      dispath(setUsers(response.data.items)) // Колбек функция которая диспатчит пользователей выбраной страници
    })
}
export default UsersReducer
