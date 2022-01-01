import './User.css'
import usersPhoto from '../UsersImg/users.jpg'
import { NavLink } from 'react-router-dom'

const User = (props) => {
  return (
    <div className='aboutUser'>
      <div className='aboutUser__foto'>
        <NavLink to={`/profile/` + props.userInfo.id}>
          <img src={props.userInfo.photos.small != null ? props.userInfo.photos.small : usersPhoto} alt='' />
        </NavLink>
      </div>
      <div className='aboutUser__infrmation'>
        <div className='aboutUser__fullName'>{props.userInfo.name}</div>
        <div className='aboutUser__country'>{props.userInfo.country != null ? props.userInfo.country : 'God'}</div>
        <div className='aboutUser__sity'>{props.userInfo.sity != null ? props.userInfo.sity : 'Like'}</div>
        <div className='aboutUser__credo'>{props.userInfo.status}</div>
      </div>
    </div>
  )
}

export default User
