import { Field } from "formik";
import React from "react";

const ProfileSettingsContactsInput = (props) => {
  const contactsArr = Object.keys(props.contacts);
  return (
    <>
      {contactsArr.map((contact) => {
        return (
          <div className='settings__point'>
            <h4 className='settings__title_four'>{contact}:</h4>
            <Field name={`contacts.${contact}`} placeholder={`${contact}`} />
          </div>
        );
      })}
    </>
  );
};

export default ProfileSettingsContactsInput;
