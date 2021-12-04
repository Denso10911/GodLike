import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ForumPost.css'

const ForumPost = (props) => {
  return (
    <div className="forumPost">
      <div className="formPost__avatar"></div>
      <div className="forumPost__content">
        <div className="formPost__text">{props.text}</div>
        <div className="formPost__likes">
          <div className="formPost__icon">
            <FontAwesomeIcon icon="heart" />
          </div>
          <div className="formPost__likes">{props.likes}</div>
        </div>
      </div>
    </div>
  )
}

export default ForumPost
