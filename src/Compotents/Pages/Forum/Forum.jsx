import ForumTopics from './ForumTopics/ForumTopics'
import GetGodLike from './GetGodLike/GetGodLike'
import './Forum.css'
import ForumPosts from './ForumPosts/ForumPosts'

const Forum = (props) => {
  return (
    <div className="forum">
      <GetGodLike />

      <div className="forum__content">
        <ForumTopics forumToopicsData={props.forum.forumToopicsData} />
        <ForumPosts dispatch={props.dispatch} forum={props.forum} />
      </div>
    </div>
  )
}

export default Forum
