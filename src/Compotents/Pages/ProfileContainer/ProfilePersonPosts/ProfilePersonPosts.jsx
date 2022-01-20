import React from "react";
import PostMessageForm from "./PostMessageForm/PostMessageForm";
import Posts from "./Posts/Posts";

const ProfilePersonPosts = (props) => (
  <div className='posts'>
    <PostMessageForm setMyNewPost={props.setMyNewPost} />
    <Posts posts={props.posts} deleteMyPost={props.deleteMyPost} />
  </div>
);

export default ProfilePersonPosts;
