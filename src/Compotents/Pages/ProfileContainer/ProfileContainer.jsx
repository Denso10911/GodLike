import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Fetching from "../../../assets/Fetching/Fetching";
import { withAuthRedirecrt } from "../../../hoc/AuthHoc";
import {
  getProfileThunk,
  getUserStatusThunk,
  updateUserStatusThunk,
  setMyNewPost,
  deleteMyPost,
  changeMyPhotoThunk,
} from "../../../Redux/ProfileReducer";
import Profile from "./Profile";

const ProfileContainer = (props) => {
  useEffect(() => {
    let userId = props.match.params.userId;
    if (!userId) {
      userId = props.myId;
    }
    props.getProfileThunk(userId);
    props.getUserStatusThunk(userId);
  }, [props.match.params.userId]);

  if (props.isFetching) {
    return <Fetching />;
  } else {
    return (
      <Profile
        profile={props.profile}
        status={props.status}
        updateUserStatusThunk={props.updateUserStatusThunk}
        myId={props.myId}
        posts={props.posts}
        setMyNewPost={props.setMyNewPost}
        deleteMyPost={props.deleteMyPost}
        changeMyPhotoThunk={props.changeMyPhotoThunk}
      />
    );
  }
};

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isFetching: state.profilePage.isFetching,
    posts: state.profilePage.posts,
    myId: state.login.id,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfileThunk,
    getUserStatusThunk,
    updateUserStatusThunk,
    setMyNewPost,
    deleteMyPost,
    changeMyPhotoThunk,
  }),
  withRouter,
  withAuthRedirecrt
)(ProfileContainer);
