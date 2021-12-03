import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import './ForumTopic.css'

const ForumTopic = (props) => {
  return (
    <div className="forum__topic">
      <NavLink to={'/forum/' + props.id}>
        <div className="topic__icon">
          <FontAwesomeIcon icon={['fab', 'react']} />
        </div>
        <h4 className="topic__title">{props.titles}</h4>
      </NavLink>
    </div>
  )
}

export default ForumTopic
