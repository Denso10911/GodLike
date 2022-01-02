import React from 'react'
import { Field, reduxForm } from 'redux-form'
import ForumPost from './ForumPost/ForumPost'
import './ForumPosts.css'

const ForumPosts = (props) => {
  let forumPostElement = props.posts.map((p) => <ForumPost text={p.text} likes={p.likes} key={p.id} />)

  let addNewPost = (value) => {
    props.sentNewPost(value.postText)
  }

  return (
    <div className='forumPosts'>
      {forumPostElement}
      <ForumPostFormRedux onSubmit={addNewPost} />
    </div>
  )
}

const addForumPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='forumPostCreator'>
      <Field name='postText' component='textarea' placeholder='Write your post' />
      <button>Sent</button>
    </form>
  )
}

const ForumPostFormRedux = reduxForm({ form: 'forumAddPostForm' })(addForumPostForm)

export default ForumPosts
