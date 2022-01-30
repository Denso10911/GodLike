import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import usersPhoto from "../../../../Users/UsersImg/users.jpg";
import "./MyProfilePhoto.css";

const MyProfilePhoto = (props) => {
  const handleImageChange = (e) => {
    props.changeMyPhotoThunk(e.target.files[0]);
  };

  return (
    <div className='myProfile__photo'>
      <div className='myProfile__photo_saved'>
        <img
          src={props.photos.large != null ? props.photos.large : usersPhoto}
          alt='#'
        />
      </div>
      <div className='myProfile__photo_change'>
        <label htmlFor='file-upload' className='custom__fileUpload'>
          <FontAwesomeIcon icon={"camera"} /> Custom Upload
        </label>
        <input
          type='file'
          id='file-upload'
          onChange={(e) => {
            handleImageChange(e);
          }}
        />
      </div>
    </div>
  );
};

export default MyProfilePhoto;
