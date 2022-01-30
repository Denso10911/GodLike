import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProfileContact.css";

const ProfileContact = (props) => {
  let defaultIcon = props.contactDefault
    ? props.contactDefault
    : props.contactName;

  return (
    <div className='contact'>
      {!props.contactLinks[props.contactName] ? null : (
        <a href={"https://" + props.contactLinks[props.contactName]}>
          <FontAwesomeIcon icon={["fab", `${defaultIcon}`]} />{" "}
          {props.contactName}
        </a>
      )}
    </div>
  );
};

export default ProfileContact;
