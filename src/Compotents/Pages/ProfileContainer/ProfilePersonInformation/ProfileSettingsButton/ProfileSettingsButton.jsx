import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ProfileSettingsButton.css";

const ProfileSettings = (props) => {
  if (props.myId === props.userId) {
    return (
      <div className='profile__settings' onClick={props.changeSettingsMod}>
        {props.settingMod && <FontAwesomeIcon icon={"times"} />}
        {!props.settingMod && <FontAwesomeIcon icon={"cog"} />}
      </div>
    );
  } else {
    return <></>;
  }
};

export default ProfileSettings;
