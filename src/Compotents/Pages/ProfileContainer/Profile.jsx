import Fetching from '../../../assets/Fetching/Fetching'
import './Profile.css'
import ProfileContacts from './ProfileContacts/ProfileContacts'
import ProfileStatus from './ProfileStatus/ProfileStatus'
import ProfileStatusWithHook from './ProfileStatus/ProfileStatusHook'

const Profile = (props) => {
  if (!props.profile) {
    return <Fetching />
  }

  return (
    <div className='profile'>
      <div className='profile__photo'>
        <img src={props.profile.photos.large} alt='#' />
      </div>
      <div className='profile__information'>
        <div className='profile__name'>{props.profile.fullName}</div>
        <div className='profile__status'>
          <ProfileStatusWithHook status={props.status} updateUserStatusThunk={props.updateUserStatusThunk} />
        </div>
        <div className='profile__contacts'>
          <ProfileContacts contacts={props.profile.contacts} />
        </div>
      </div>
      <div className='profile__lookingForAJob'>{props.profile.lookingForAJob}</div>
      <div className='profile__lookingForAJobDescription'>{props.profile.lookingForAJobDescription}</div>
    </div>
  )
}

export default Profile
