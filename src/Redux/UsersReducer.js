import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_LAZY_USERS = "SET_LAZY_USERS";
const TOTAL_COUNT = "TOTAL_COUNT";
const CURRENT_PAGE = "CURRENT_PAGE";
const IS_FETCHING = "IS_FETCHING";
const DO_FOLLOWING_REQUEST = "DO_FOLLOWING_REQUEST";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";
const SET_USERS_PAGE_STYLE = "SET_USERS_PAGE_STYLE";

let initialState = {
  users: [],
  totalUsersCount: 20,
  pageSize: 5,
  currentPage: 1,
  isFetching: false,
  statusOfFallowingRequest: [],
  pageStyle: true,
};
const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_LAZY_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
        currentPage: action.currentPage,
      };
    case TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
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
      };
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.pageSize,
        currentPage: 1,
      };
    case SET_USERS_PAGE_STYLE:
      return {
        ...state,
        pageStyle: action.pageStyle,
      };
    default:
      return state;
  }
};

export const followUser = (id) => ({ type: FOLLOW, id });
export const unFollowUser = (id) => ({ type: UNFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setLazyUsers = (users, currentPage) => ({
  type: SET_LAZY_USERS,
  users,
  currentPage,
});
export const doFollowingRequest = (statusOfFallowingRequest, userId) => ({
  type: DO_FOLLOWING_REQUEST,
  statusOfFallowingRequest,
  userId,
});
const setCurrentPage = (currentPage) => {
  return {
    type: CURRENT_PAGE,
    currentPage,
  };
};
export const setTotalUsersCount = (totalUsersCount) => ({
  type: TOTAL_COUNT,
  totalUsersCount,
});
export const setFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});
export const setPageSize = (pageSize) => ({
  type: SET_PAGE_SIZE,
  pageSize,
});
export const setPageStyle = (pageStyle) => ({
  type: SET_USERS_PAGE_STYLE,
  pageStyle,
});
// Thunks

export const unFollowThunk = (userId) => async (dispatch) => {
  dispatch(doFollowingRequest(true, userId));
  let response = await usersAPI.deleteFollow(userId);
  if (response.data.resultCode === 0) {
    dispatch(unFollowUser(userId));
  }
  dispatch(doFollowingRequest(false, userId));
};

export const followThunk = (userId) => async (dispatch) => {
  console.log("start");
  dispatch(doFollowingRequest(true, userId));
  let response = await usersAPI.postFollow(userId);
  if (response.data.resultCode === 0) {
    dispatch(followUser(userId));
  }
  dispatch(doFollowingRequest(false, userId));
};

export const getUsersThunk = (pageSize, currentPage) => async (dispatch) => {
  dispatch(setFetching(true)); //Во время начала запроса отображается крутилка
  // const getCurrentPage = currentPage + 1;
  let response = await usersAPI.getUsers(pageSize, currentPage); //Функция которая делает запрос на сервер
  dispatch(setUsers(response.data.items)); // Колбек функция которая диспатчит пользователей страници по дефолту
  dispatch(setTotalUsersCount(response.data.totalCount)); // Колбек функция которая диспатчит общую сумму пользователей
  dispatch(setFetching(false)); //После получения ответа сервера крутилка исчезает
};

export const getLazyUsersThunk =
  (pageSize, currentPage) => async (dispatch) => {
    const currentLazyPage = currentPage + 1;
    let response = await usersAPI.getUsers(pageSize, currentLazyPage);
    dispatch(setLazyUsers(response.data.items, currentLazyPage));
  };

export const changePageThunk = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setFetching(true)); //Во время начала запроса отображается крутилка
  dispatch(setCurrentPage(currentPage)); //Колбек функция которая диспатчит выбраную страницу
  let response = await usersAPI.getUsers(pageSize, currentPage); //Функция которая делает запрос на сервер
  dispatch(setUsers(response.data.items)); // Колбек функция которая диспатчит пользователей выбраной страници
  dispatch(setFetching(false)); //После получения ответа сервера крутилка исчезает
};

export default UsersReducer;
