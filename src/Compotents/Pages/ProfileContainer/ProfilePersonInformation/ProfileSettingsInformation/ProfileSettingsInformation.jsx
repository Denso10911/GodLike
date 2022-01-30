import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./ProfileSettingsInformation.scss";
import { putProfileThunk } from "../../../../../Redux/ProfileReducer";
import { connect } from "react-redux";
import ProfileSettingsContactsInput from "./ProfileSettingsContactsInput/ProfileSettingsContactsInput";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ProfileSettingsInformation = (props) => {
  const initialValues = {
    userId: props.myId,
    aboutMe: props.profile.aboutMe,
    lookingForAJob: props.profile.lookingForAJob,
    lookingForAJobDescription: props.profile.lookingForAJobDescription,
    fullName: props.profile.fullName,
    contacts: {
      github: props.profile.contacts.github,
      vk: props.profile.contacts.vk,
      facebook: props.profile.contacts.facebook,
      instagram: props.profile.contacts.instagram,
      twitter: props.profile.contacts.twitter,
      website: props.profile.contacts.website,
      youtube: props.profile.contacts.youtube,
      mainLink: props.profile.contacts.mainLink,
    },
  };

  return (
    <div className='settings'>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          props.putProfileThunk(values);
          props.setSettingsMod();
        }}
      >
        {({ errors, touched }) => (
          <Form className='settings__form'>
            <button type='submit' className='settings__button'>
              Save
            </button>
            <div className='settings__points'>
              <div className='settings__point'>
                <h3 className='settings__title_three'>My name</h3>
                <Field name='fullName' placeholder='My name' />
                {errors.fullName && touched.fullName ? (
                  <div>{errors.fullName}</div>
                ) : null}
              </div>
            </div>
            <div className='settings__points'>
              <div className='settings__point'>
                <h3 className='settings__title_three'>About Me</h3>
                <Field id='aboutMe' name='aboutMe' placeholder='About me' />
              </div>
            </div>
            <div className='settings__points'>
              <div className='settings__point settings__point_checkbox'>
                <h3 className='settings__title_three settings__title_chekbox '>
                  Looking for a job:
                </h3>
                <Field
                  id='lookingForAJob'
                  name='lookingForAJob'
                  type='checkbox'
                />
              </div>
              <div className='settings__point'>
                <h3 className='settings__title_three'>My skills:</h3>
                <Field
                  id='lookingForAJobDescription'
                  name='lookingForAJobDescription'
                  placeholder='skills'
                />
              </div>
            </div>
            <div className='settings__points'>
              <h3 className='settings__title_three'>Contacts:</h3>
              <ProfileSettingsContactsInput contacts={initialValues.contacts} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    myId: state.login.id,
  };
};
export default connect(mapStateToProps, { putProfileThunk })(
  ProfileSettingsInformation
);
