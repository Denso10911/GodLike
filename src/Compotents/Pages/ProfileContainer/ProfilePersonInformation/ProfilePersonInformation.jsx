import React from "react";
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import ProfileLookingForAJob from "./ProfileLookingForAJob/ProfileLookingForAJob";
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusHook";

export default (props) => (
  <>
    <div className='profile__photo'>
      <img src={props.profile.photos.large} alt='#' />
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
    <ProfileLookingForAJob
      lookingForAJob={props.profile.lookingForAJob}
      lookingForAJobDescription={props.profile.lookingForAJobDescription}
    />
  </>
);
