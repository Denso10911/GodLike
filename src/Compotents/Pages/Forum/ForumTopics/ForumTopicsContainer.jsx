import ForumTopics from './ForumTopics'
import './ForumTopics.css'

const ForumTopicsContainer = (props) => {
  let state = props.store.getState()

  return <ForumTopics forumToopicsData={state.forum.forumToopicsData} />
}

export default ForumTopicsContainer
