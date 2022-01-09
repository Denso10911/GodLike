import React from "react";

export default (props) => {
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
