import './StyleTopLine/Social.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialIcons from './SocialIcons/SocialIcons'

const Social = () => {
  return (
    <div className="links">
      <SocialIcons icon={<FontAwesomeIcon icon={['fab', 'twitter']} />} />
      <SocialIcons icon={<FontAwesomeIcon icon={['fab', 'dribbble']} />} />
      <SocialIcons icon={<FontAwesomeIcon icon={['fab', 'instagram']} />} />
      <SocialIcons icon={<FontAwesomeIcon icon={['fab', 'pinterest']} />} />
    </div>
  )
}

export default Social
