import React from "react";

const ProfileLookingForAJob = (props) => {
  return (
    <div className='profile__lookingForAJob'>
      <div className='profile__lookingForAJob_boolean'>
        {props.lookingForAJob
          ? "I want find new job"
          : "I alredy have some job"}
      </div>
      <div className='profile__lookingForAJobDescription'>
        {props.lookingForAJob ? props.lookingForAJobDescription : null}
      </div>
    </div>
  );
};

export default ProfileLookingForAJob;
