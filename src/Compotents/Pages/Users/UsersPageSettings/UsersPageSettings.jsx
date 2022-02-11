import React from "react";
import UsersPageSize from "./UsersPageSize/UsersPageSize";
import UsersPageStyle from "./UsersPageStyle/UsersPageStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UsersPageSettings.scss";

const UsersPageSettings = (props) => {
  return (
    <>
      <h2 className='usersPage__title'>
        <FontAwesomeIcon icon={"cog"} />
      </h2>
      <div className='usersPage__setContent'>
        <UsersPageSize
          setPageSize={props.setPageSize}
          pageSize={props.pageSize}
        />
        <UsersPageStyle
          setPageStyle={props.setPageStyle}
          pageStyle={props.pageStyle}
        />
      </div>
    </>
  );
};

export default UsersPageSettings;
