import React from "react";
import FollowButton from "./FollowButton/FollowButton";

export default (props) => {
  const forButtonProps = {
    id: props.userInfo.id,
    statusOfFallowingRequest: props.statusOfFallowingRequest,
  };
  return (
    <div>
      {props.userInfo.followed ? (
        <FollowButton
          followingThunk={props.unFollowThunk}
          buttonName='UNFOLLOW'
          className='button__unfollow'
          {...forButtonProps}
        />
      ) : (
        <FollowButton
          followingThunk={props.followThunk}
          buttonName='FOLLOW'
          className='button__follow'
          {...forButtonProps}
        />
      )}
    </div>
  );
};
