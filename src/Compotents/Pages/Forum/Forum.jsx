import GetGodLike from './GetGodLike/GetGodLike'
import './Forum.css'
import ForumPosts from './ForumPosts/ForumPosts'
import ForumTopics from './ForumTopics/ForumTopics'

const Forum = (props) => {
  return (
    <div className='forum'>
      <GetGodLike />

      <div className='forum__content'>
        <ForumTopics forumToopicsData={props.forum.forumToopicsData} />
        <ForumPosts posts={props.forum.posts} sentNewPost={props.sentNewPost} />
      </div>
    </div>
  )
}

export default Forum
