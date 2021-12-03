import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './StyleMenu/NavIcons.module.css'

const NavIcons = () => {
  return (
    <div className={style.links}>
      <div className="twitter">
        <FontAwesomeIcon icon="search" />
      </div>
      <div className="dribbble">
        <FontAwesomeIcon icon="shopping-cart" />
      </div>
      <div className="instagram">
        <FontAwesomeIcon icon="sign-in-alt" />
      </div>
    </div>
  )
}

export default NavIcons
