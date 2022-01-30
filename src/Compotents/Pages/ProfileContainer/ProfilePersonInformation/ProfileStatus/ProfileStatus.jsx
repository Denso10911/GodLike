import React, { useState } from "react";
import "./ProfileStatus.scss";

function ProfileStatus(props) {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  let activateEditMod = () => {
    if (props.userId === props.myId) {
      setEditMode(true);
    }
  };
  let deactivateEditMod = () => {
    setEditMode(false);
    props.updateUserStatusThunk(status);
  };

  let onStatusTextChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  let statusStyle = props.userId === props.myId ? "profile__status_text" : null;

  return (
    <div className='profile__status'>
      {!editMode && (
        <div>
          <span onClick={activateEditMod} className={statusStyle}>
            {!props.status ? "Writte some text" : props.status}{" "}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusTextChange}
            autoFocus={true}
            onBlur={deactivateEditMod}
            value={status}
            className='profile__status_input'
          />
        </div>
      )}
    </div>
  );
}

export default ProfileStatus;
