import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOTAL_COUNT = "TOTAL_COUNT";
const CURRENT_PAGE = "CURRENT_PAGE";
const IS_FETCHING = "IS_FETCHING";
const DO_FOLLOWING_REQUEST = "DO_FOLLOWING_REQUEST";
const SET_PAGE_SIZE = "SET_PAGE_SIZE";

let initialState = {
  users: [],
  totalUsersCount: 20,
  pageSize: 5,
  currentPage: 0,
  isFetching: false,
  statusOfFallowingRequest: [],
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
      debugger;
      return {
        ...state,
        pageSize: action.pageSize,
        currentPage: 0,
      };

    default:
      return state;
  }
};

export const followUser = (id) => ({ type: FOLLOW, id });
export const unFollowUser = (id) => ({ type: UNFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
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

// Thunks

export const unFollowThunk = (userId) => (dispatch) => {
  dispatch(doFollowingRequest(true, userId));
  usersAPI.deleteFollow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(unFollowUser(userId));
    }
    dispatch(doFollowingRequest(false, userId));
  });
};

export const followThunk = (userId) => (dispatch) => {
  dispatch(doFollowingRequest(true, userId));
  usersAPI.postFollow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(followUser(userId));
    }
    dispatch(doFollowingRequest(false, userId));
  });
};

export const getUsersThunk = (pageSize, currentPage) => (dispatch) => {
  dispatch(setFetching(true)); //Во время начала запроса отображается крутилка
  const getCurrentPage = currentPage + 1;
  usersAPI
    .getUsers(pageSize, getCurrentPage) //Функция которая делает запрос на сервер
    .then((response) => {
      dispatch(setUsers(response.data.items)); // Колбек функция которая диспатчит пользователей страници по дефолту
      dispatch(setTotalUsersCount(response.data.totalCount)); // Колбек функция которая диспатчит общую сумму пользователей
      dispatch(setFetching(false)); //После получения ответа сервера крутилка исчезает
    });
};

export const changePageThunk = (currentPage, pageSize) => (dispatch) => {
  const getCurrentPage = currentPage + 1;
  dispatch(setFetching(true)); //Во время начала запроса отображается крутилка
  dispatch(setCurrentPage(currentPage)); //Колбек функция которая диспатчит выбраную страницу
  usersAPI
    .getUsers(pageSize, getCurrentPage) //Функция которая делает запрос на сервер
    .then((response) => {
      dispatch(setUsers(response.data.items)); // Колбек функция которая диспатчит пользователей выбраной страници
      dispatch(setFetching(false)); //После получения ответа сервера крутилка исчезает
    });
};

export default UsersReducer;
