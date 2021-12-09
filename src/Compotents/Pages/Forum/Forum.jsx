import GetGodLike from './GetGodLike/GetGodLike'
import './Forum.css'
import ForumTopicsContainer from './ForumTopics/ForumTopicsContainer'
import ForumPostsContainer from './ForumPosts/ForumPostsContainer'

const Forum = (props) => {
  return (
    <div className="forum">
      <GetGodLike />

      <div className="forum__content">
        <ForumTopicsContainer store={props.store} />
        <ForumPostsContainer />
      </div>
    </div>
  )
}

export default Forum
