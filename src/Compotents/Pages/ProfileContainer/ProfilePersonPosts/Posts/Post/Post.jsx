import React from "react";

const Post = (props) => {
  return (
    <div className='post'>
      <div className='post__text'>{props.text}</div>
      <div className='post__likes'>{props.likes}</div>
      <span
        className='post__delete'
        onClick={() => {
          props.deleteMyPost(props.id);
        }}
      >
        delete
      </span>
    </div>
  );
};

export default Post;
