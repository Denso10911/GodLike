import React from "react";
import usersPhoto from "../../../Users/UsersImg/users.jpg";
import MyProfilePhoto from "./MyProgilePhoto/MyProfilePhoto";

export default (props) => {
  if (props.myId !== props.userId) {
    return (
      <img
        src={props.photos.large != null ? props.photos.large : usersPhoto}
        alt='#'
      />
    );
  } else {
    return (
      <MyProfilePhoto
        photos={props.photos}
        changeMyPhotoThunk={props.changeMyPhotoThunk}
      />
    );
  }
};
