import React from "react";
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import ProfileLookingForAJob from "./ProfileLookingForAJob/ProfileLookingForAJob";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import "./ProfilePersonInformation.css";
import { useState } from "react";
import ProfileSettingsInformation from "./ProfileSettingsInformation/ProfileSettingsInformation";
import ProfileSettingsButton from "./ProfileSettingsButton/ProfileSettingsButton";

const ProfilePersonInformation = (props) => {
  const [settingMod, setSettingsMod] = useState(false);

  const changeSettingsMod = () => {
    settingMod ? setSettingsMod(false) : setSettingsMod(true);
  };

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
        <div className='profile__header'>
          <div className='profile__name'>{props.profile.fullName}</div>
          <ProfileSettingsButton
            settingMod={settingMod}
            changeSettingsMod={() => changeSettingsMod()}
            myId={props.myId}
            userId={props.profile.userId}
          />
        </div>
        <div className='profile__status'>
          <ProfileStatus
            userId={props.profile.userId}
            status={props.status}
            updateUserStatusThunk={props.updateUserStatusThunk}
            myId={props.myId}
          />
        </div>

        {!settingMod && (
          <>
            <ProfileContacts contacts={props.profile.contacts} />
            <ProfileLookingForAJob
              lookingForAJob={props.profile.lookingForAJob}
              lookingForAJobDescription={
                props.profile.lookingForAJobDescription
              }
            />
          </>
        )}
        {settingMod && (
          <ProfileSettingsInformation
            profile={props.profile}
            setSettingsMod={() => setSettingsMod(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePersonInformation;
