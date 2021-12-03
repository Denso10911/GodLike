import ForumTopics from './ForumTopics/ForumTopics'
import GetGodLike from './GetGodLike/GetGodLike'
import './Forum.css'

const Forum = (props) => {
  return (
    <div className="forum">
      <GetGodLike />

      <div className="forum__content">
        <ForumTopics forumToopicsData={props.forumToopicsData} />
      </div>
    </div>
  )
}

export default Forum
