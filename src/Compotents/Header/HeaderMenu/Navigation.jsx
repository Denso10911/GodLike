import { Link } from 'react-router-dom'
import './StyleMenu/Navigation.css'

const Navigation = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Hasdome
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/features">Features</Link>
        </li>
        <li className="nav__item">
          <Link to="/elements">Elements</Link>
        </li>
        <li className="nav__item">
          <Link to="/profile/1">Profile</Link>
        </li>
        <li className="nav__item">
          <Link to="/forum">Forum</Link>
        </li>
        <li className="nav__item">
          <Link to="/friends">Friends</Link>
        </li>
        <li className="nav__item">
          <Link to="/messages">Messages</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
