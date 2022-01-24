import React from "react";
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import ProfileLookingForAJob from "./ProfileLookingForAJob/ProfileLookingForAJob";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusHook";
import "./ProfilePersonInformation.css";
import { useState } from "react";
import SettingsContainer from "../../Settings/SettingsContainer";
import ProfileSettings from "../ProfileSettings/ProfileSettings";

const ProfilePersonInformation = (props) => {
  const [settingMod, setSettingsMod] = useState(false);

  return (
    <div className='profile'>
      <div className='profile__photo'>
        <ProfilePhoto
          photos={props.profile.photos}
          myId={props.myId}
          userId={props.profile.userId}
          changeMyPhotoThunk={props.changeMyPhotoThunk}
        />
      </div>
      <div className='profile__information'>
        <div className='profile__name'>{props.profile.fullName}</div>
        {!settingMod && (
          <>
            <ProfileSettings setSettingsMod={() => setSettingsMod(true)} />
            <ProfileContacts contacts={props.profile.contacts} />
            <ProfileLookingForAJob />
          </>
        )}
        {settingMod && (
          <SettingsContainer
            profile={props.profile}
            setSettingsMod={() => setSettingsMod(false)}
          />
        )}
      </div>
      <div className='profile__status'>
        <ProfileStatusWithHook
          userId={props.profile.userId}
          status={props.status}
          updateUserStatusThunk={props.updateUserStatusThunk}
          myId={props.myId}
        />
      </div>
    </div>
  );
};

export default ProfilePersonInformation;
