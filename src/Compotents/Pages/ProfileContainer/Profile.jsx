import Fetching from "../../../assets/Fetching/Fetching";
import "./Profile.css";
import ProfilePersonInformation from "./ProfilePersonInformation/ProfilePersonInformation";

const Profile = (props) => {
  if (!props.profile) {
    return <Fetching />;
  }

  return (
    <div className='profile'>
      <ProfilePersonInformation
        profile={props.profile}
        status={props.status}
        myId={props.myId}
        updateUserStatusThunk={props.updateUserStatusThunk}
      />
    </div>
  );
};

export default Profile;
