import './StyleTopLine/Social.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Social = () => {
  return (
    <div className="links">
      <div className="twitter">
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </div>
      <div className="dribbble">
        <FontAwesomeIcon icon={['fab', 'dribbble']} />
      </div>
      <div className="instagram">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </div>
      <div className="pinterest">
        <FontAwesomeIcon icon={['fab', 'pinterest']} />
      </div>
    </div>
  )
}

export default Social
