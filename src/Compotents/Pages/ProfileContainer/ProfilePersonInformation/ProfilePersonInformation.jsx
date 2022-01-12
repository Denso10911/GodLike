import React from "react";
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import ProfileLookingForAJob from "./ProfileLookingForAJob/ProfileLookingForAJob";
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusHook";
import usersPhoto from "../../Users/UsersImg/users.jpg";

const ProfilePersonInformation = (props) => {
  return (
    <>
      <div className='profile__photo'>
        <img
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : usersPhoto
          }
          alt='#'
        />
      </div>
      <div className='profile__information'>
        <div className='profile__name'>{props.profile.fullName}</div>
        <ProfileStatusWithHook
          userId={props.profile.userId}
          status={props.status}
          updateUserStatusThunk={props.updateUserStatusThunk}
          myId={props.myId}
        />
        <ProfileContacts contacts={props.profile.contacts} />
      </div>
      <ProfileLookingForAJob />
    </>
  );
};

export default ProfilePersonInformation;
