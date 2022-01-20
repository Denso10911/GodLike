import React from "react";

const FollowButton = (props) => {
  return (
    <button
      onClick={() => {
        props.followingThunk(props.id);
      }}
      className={props.className}
      disabled={props.statusOfFallowingRequest.some((id) => id === props.id)}
    >
      {props.buttonName}
    </button>
  );
};

export default FollowButton;
