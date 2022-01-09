import React from "react";

export default (props) => {
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
