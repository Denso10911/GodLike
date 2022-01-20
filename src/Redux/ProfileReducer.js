import { profileAPI } from "../api/api";

const SET_USER_INFORMATION = "SET_USER_INFORMATION";
const SET_USER_STATUS = "SET_USER_STATUS";
const IS_FETCHING = "IS_FETCHING";
const SET_MY_NEW_POST = "SET_MY_NEW_POST";
const DELETE_MY_POST = "DELETE_MY_POST";

let initialState = {
  profile: null,
  isFetching: false,
  status: "",
  posts: [
    { id: 1, text: "What are you thinking for", likes: 10 },
    { id: 2, text: "About this game", likes: 15 },
  ],
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFORMATION:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_MY_NEW_POST:
      let post = {
        id: state.posts.length + 1,
        text: action.text,
        likes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, post],
      };

    case DELETE_MY_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.postId),
      };

    default:
      return state;
  }
};

export const setFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});

export const setUserInformation = (profile) => ({
  type: SET_USER_INFORMATION,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const setMyNewPost = (text) => ({
  type: SET_MY_NEW_POST,
  text,
});
export const deleteMyPost = (postId) => ({
  type: DELETE_MY_POST,
  postId,
});

export const getProfileThunk = (userId) => (dispatch) => {
  dispatch(setFetching(true));
  profileAPI.getProfile(userId).then((response) => {
    //Функция которая делает запрос на сервер
    dispatch(setUserInformation(response.data)); // Колбек функция которая диспатчит информацию о конкретном пользователе
    dispatch(setFetching(false));
  });
};
export const getUserStatusThunk = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    //Функция которая делает запрос на сервер
    dispatch(setUserStatus(response.data)); // Колбек функция которая диспатчит информацию о конкретном пользователе
  });
};
export const updateUserStatusThunk = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      //Функция которая делает запрос на сервер
      dispatch(setUserStatus(status)); // Колбек функция которая диспатчит информацию о конкретном пользователе
    }
  });
};
export default ProfileReducer;
