import Fetching from '../../../assets/Fetching/Fetching'
import './Profile.css'

const Profile = (props) => {
  if (!props.profile) {
    return <Fetching />
  }
  return (
    <div className="profile">
      <div className="profile__photo">
        <img src={props.profile.photos.small} alt="#" />
      </div>
      <div className="profile__information">
        <div className="profile__name">{props.profile.fullName}</div>
        <div className="profile__status">{props.profile.aboutMe}</div>
        <div className="profile__contacts">
          {props.profile.contacts.facebook}
        </div>
      </div>
      <div className="profile__lookingForAJob">
        {props.profile.lookingForAJob}
      </div>
      <div className="profile__lookingForAJobDescription">
        {props.profile.lookingForAJobDescription}
      </div>
    </div>
  )
}

export default Profile
