import { profileAPI } from "../api/api";

const SET_USER_INFORMATION = "SET_USER_INFORMATION";
const SET_USER_STATUS = "SET_USER_STATUS";
const IS_FETCHING = "IS_FETCHING";
const SET_MY_NEW_POST = "SET_MY_NEW_POST";
const DELETE_MY_POST = "DELETE_MY_POST";
const CHANGE_MY_PHOTO = "CHANGE_MY_PHOTO";

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

    case CHANGE_MY_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.img },
      };

    default:
      return state;
  }
};

//AC

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
export const changeMyPhoto = (img) => {
  return {
    type: CHANGE_MY_PHOTO,
    img,
  };
};

//thunks

export const getProfileThunk = (userId) => async (dispatch) => {
  dispatch(setFetching(true));
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserInformation(response.data));
  dispatch(setFetching(false));
};

export const getUserStatusThunk = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(response.data));
};

export const updateUserStatusThunk = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};

export const changeMyPhotoThunk = (img) => async (dispatch) => {
  let response = await profileAPI.changeMyPhoto(img);
  if (response.data.resultCode === 0) {
    dispatch(changeMyPhoto(response.data.data.photos));
  }
};

export const putProfileThunk = (profile) => async (dispatch) => {
  dispatch(setFetching(true));
  let response = await profileAPI.putProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getProfileThunk(profile.userId));
  }
  dispatch(setFetching(false));
};

export default ProfileReducer;
