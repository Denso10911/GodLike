import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ProfileSettings.css";

const ProfileSettings = (props) => {
  return (
    <div className='profile__settings' onClick={props.setSettingsMod}>
      <FontAwesomeIcon icon={"cog"} />
    </div>
  );
};

export default ProfileSettings;
