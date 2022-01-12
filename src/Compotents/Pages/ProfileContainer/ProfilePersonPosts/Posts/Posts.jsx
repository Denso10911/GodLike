import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {
  return (
    <div>
      {props.posts
        .map((p) => (
          <Post
            text={p.text}
            likes={p.likes}
            id={p.id}
            key={p.id}
            deleteMyPost={props.deleteMyPost}
          />
        ))
        .reverse()}
    </div>
  );
};

export default Posts;
