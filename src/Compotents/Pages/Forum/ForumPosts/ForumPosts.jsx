import {
  newPostAction,
  onPostChangeAction,
} from '../../../../Redux/ForumReducer'
import React from 'react'
import ForumPost from './ForumPost/ForumPost'
import './ForumPosts.css'

let sentAreaPostText = React.createRef()

const ForumPosts = (props) => {
  let forumPostElement = props.forum.posts.map((p) => (
    <ForumPost text={p.text} likes={p.likes} key={p.id} />
  ))

  let onPostSentClick = () => {
    props.dispatch(newPostAction())
  }

  let onPostTextChange = () => {
    let newPostPoint = sentAreaPostText.current.value
    props.dispatch(onPostChangeAction(newPostPoint))
  }

  return (
    <div className="forumPosts">
      {forumPostElement}
      <div className="forumPostCreator">
        <textarea
          onChange={onPostTextChange}
          value={props.forum.newPostText}
          ref={sentAreaPostText}
          placeholder="Write your post"
        />
        <button onClick={onPostSentClick}>Sent</button>
      </div>
    </div>
  )
}
export default ForumPosts
