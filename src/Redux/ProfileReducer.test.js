import React from "react";
import ProfileReducer, { deleteMyPost, setMyNewPost } from "./ProfileReducer";

let state = {
  posts: [
    { id: 1, text: "What are you thinking for", likes: 10 },
    { id: 2, text: "About this game", likes: 15 },
  ],
};

it("new post sould be add", () => {
  // 1. test data
  let action = setMyNewPost("today was a fantastic day");

  // 2. action

  let newState = ProfileReducer(state, action);

  // 3. expectation

  expect(newState.posts.length).toBe(3);
});

it("deleted post sould be delete", () => {
  // 1. test data
  let action = deleteMyPost(1);

  // 2. action
  let newState = ProfileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(1);
});
