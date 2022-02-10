import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UsersPageStyle.scss";

const UsersPageStyle = (props) => {
  const handlePageStyle = (style) => {
    props.setPageStyle(style);
  };

  return (
    <div className='usersPage__style'>
      <h4>Page style</h4>
      <div
        className='usersPage__style_block'
        onClick={() => handlePageStyle(true)}
      >
        <FontAwesomeIcon icon={"th"} />
      </div>
      <div className='usersPage__style_line'>
        <FontAwesomeIcon
          icon={"grip-lines"}
          onClick={() => handlePageStyle(false)}
        />
      </div>
    </div>
  );
};

export default UsersPageStyle;
