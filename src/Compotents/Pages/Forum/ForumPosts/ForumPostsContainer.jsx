import {
  newPostAction,
  onPostChangeAction,
} from '../../../../Redux/ForumReducer'
import React from 'react'
import ForumPosts from './ForumPosts'

const ForumPostsContainer = (props) => {
  let state = props.store.getState()

  let onPostSentClick = () => {
    props.store.dispatch(newPostAction())
  }

  let onPostTextChange = (newPostPoint) => {
    props.store.dispatch(onPostChangeAction(newPostPoint))
  }

  return (
    <ForumPosts
      onPostChangeAction={onPostTextChange}
      newPostAction={onPostSentClick}
      forum={state.forum}
    />
  )
}
export default ForumPostsContainer
