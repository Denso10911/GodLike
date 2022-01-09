import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProfileContact.css'

const ProfileContact = (props) => {
  return (
    <div className="contact">
      {!props.contactLinks[props.contactName] ? null : (
        <a href={'https://' + props.contactLinks[props.contactName]}>
          <FontAwesomeIcon icon={['fab', `${props.contactName}`]} />{' '}
          {props.contactName}
        </a>
      )}
    </div>
  )
}

export default ProfileContact
