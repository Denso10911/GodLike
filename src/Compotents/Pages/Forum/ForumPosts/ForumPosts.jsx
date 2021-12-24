import React from 'react'
import ForumPost from './ForumPost/ForumPost'
import './ForumPosts.css'

let sentAreaPostText = React.createRef()

const ForumPosts = (props) => {
  console.log(props)
  let forumPostElement = props.posts.map((p) => <ForumPost text={p.text} likes={p.likes} key={p.id} />)

  let onPostSentClick = () => {
    props.sentNewPost()
  }

  let onPostTextChange = () => {
    let newPostPoint = sentAreaPostText.current.value
    props.updateNewPostText(newPostPoint)
  }

  return (
    <div className="forumPosts">
      {forumPostElement}
      <div className="forumPostCreator">
        <textarea onChange={onPostTextChange} value={props.newPostText} ref={sentAreaPostText} placeholder="Write your post" />
        <button onClick={onPostSentClick}>Sent</button>
      </div>
    </div>
  )
}
export default ForumPosts
