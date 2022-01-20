import React from "react";
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import ProfileLookingForAJob from "./ProfileLookingForAJob/ProfileLookingForAJob";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusHook";

const ProfilePersonInformation = (props) => {
  return (
    <>
      <div className='profile__photo'>
        <ProfilePhoto
          photos={props.profile.photos}
          myId={props.myId}
          userId={props.profile.userId}
          changeMyPhotoThunk={props.changeMyPhotoThunk}
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
