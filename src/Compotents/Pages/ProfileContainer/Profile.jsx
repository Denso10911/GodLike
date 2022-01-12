import Fetching from "../../../assets/Fetching/Fetching";
import "./Profile.css";
import ProfilePersonInformation from "./ProfilePersonInformation/ProfilePersonInformation";
import ProfilePersonPosts from "./ProfilePersonPosts/ProfilePersonPosts";

const Profile = (props) => {
  if (!props.profile) {
    return <Fetching />;
  }

  return (
    <>
      <div className='profile'>
        <ProfilePersonInformation
          profile={props.profile}
          status={props.status}
          myId={props.myId}
          updateUserStatusThunk={props.updateUserStatusThunk}
        />
      </div>
      <div className='profilePosts'>
        <ProfilePersonPosts
          posts={props.posts}
          setMyNewPost={props.setMyNewPost}
          deleteMyPost={props.deleteMyPost}
        />
      </div>
    </>
  );
};

export default Profile;
