import ProfileContact from './ProfileContact/ProfileContact'
import './ProfileContacts.css'

const ProfileContacts = (props) => {
  let newContactKeys = Object.keys(props.contacts)
  return (
    <div className="profile__contacts">
      {newContactKeys.map((u) => {
        return (
          <ProfileContact
            contactLinks={props.contacts}
            contactName={u}
            key={u}
          />
        )
      })}
    </div>
  )
}

export default ProfileContacts
