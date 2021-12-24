import ForumTopic from './ForumTopic/ForumTopic'
import './ForumTopics.css'

const ForumTopics = (props) => {
  let forumTopicItem = props.forumToopicsData.map((topic, index) => <ForumTopic titles={topic} id={index} key={index} />)

  return (
    <div className="forum__topics">
      <h3 className="forum__topics_title">Topics</h3>
      <div className="lists">{forumTopicItem}</div>
    </div>
  )
}

export default ForumTopics
