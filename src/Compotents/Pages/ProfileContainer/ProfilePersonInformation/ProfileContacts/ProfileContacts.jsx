import ProfileContact from "./ProfileContact/ProfileContact";
import "./ProfileContacts.css";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";

const ProfileContacts = (props) => {
  let newContactKeys = Object.keys(props.contacts);

  return (
    <div className='profile__contacts'>
      {newContactKeys.map((u) => {
        if (!!findIconDefinition({ prefix: "fab", iconName: u })) {
          return (
            <ProfileContact
              contactLinks={props.contacts}
              contactName={u}
              key={u}
            />
          );
        } else {
          return (
            <ProfileContact
              contactLinks={props.contacts}
              contactName={u}
              contactDefault={"react"}
              key={u}
            />
          );
        }
      })}
    </div>
  );
};

export default ProfileContacts;
