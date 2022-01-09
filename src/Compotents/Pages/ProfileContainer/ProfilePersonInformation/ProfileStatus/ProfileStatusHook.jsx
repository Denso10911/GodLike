import React, { useState } from "react";

function ProfileStatusWithHook(props) {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  let activateEditMod = () => {
    if (props.userId == props.myId) {
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

  return (
    <div className='profile__status'>
      {!editMode && (
        <div>
          <span onClick={activateEditMod}>
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
          />
        </div>
      )}
    </div>
  );
}

export default ProfileStatusWithHook;
