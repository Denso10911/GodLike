import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from '../../../../assets/RenderField/RenderField'
import { maxLength, minLength } from '../../../../assets/RenderField/RequiredForm'
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

const maxLength50 = maxLength(50)
const minLength5 = minLength(5)

const addForumPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='forumPostCreator'>
      <Field name='postText' className='text_area' component={renderField} label='Write your post' validate={[maxLength50, minLength5]} />
      <button>Sent</button>
    </form>
  )
}

const ForumPostFormRedux = reduxForm({ form: 'forumAddPostForm' })(addForumPostForm)

export default ForumPosts
