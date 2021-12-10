import GetGodLike from './GetGodLike/GetGodLike'
import './Forum.css'
import ForumTopicsContainer from './ForumTopics/ForumTopicsContainer'
import ForumPostsContainer from './ForumPosts/ForumPostsContainer'

const Forum = () => {
  return (
    <div className="forum">
      <GetGodLike />

      <div className="forum__content">
        <ForumTopicsContainer />
        <ForumPostsContainer />
      </div>
    </div>
  )
}

export default Forum
