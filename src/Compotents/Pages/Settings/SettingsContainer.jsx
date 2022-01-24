import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./SettingsContainer.css";
import { putProfileThunk } from "../../../Redux/ProfileReducer";
import { connect } from "react-redux";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const SettingsContainer = (props) => {
  const initialValues = {
    userId: props.myId,
    aboutMe: "",
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: props.profile.fullName,
    contacts: {
      github: "",
      vk: "",
      facebook: "",
      instagram: "",
      twitter: "",
      website: "",
      youtube: "",
      mainLink: "",
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
          //   props.setMyProfile(values.post);
        }}
      >
        {({ errors, touched }) => (
          <Form className='settings__form'>
            <h1 className='settings__title_one'>Settings</h1>
            <button type='submit'>Save</button>
            <div className='settings__name'>
              <h3 className='settings__title_three'>Your name</h3>
              <Field name='fullName' placeholder='My name' />
              {errors.fullName && touched.fullName ? (
                <div>{errors.fullName}</div>
              ) : null}
            </div>
            <div className='settings__about'>
              <Field id='aboutMe' name='aboutMe' placeholder='About me' />
            </div>
            <div className='settings__aboutJob'>
              <h3 className='settings__title_three'>Looking for a job:</h3>
              <Field
                id='lookingForAJob'
                name='lookingForAJob'
                type='checkbox'
              />
              <h3 className='settings__title_three'>My skills:</h3>
              <Field
                id='lookingForAJobDescription'
                name='lookingForAJobDescription'
                placeholder='skills'
              />
            </div>
            <div className='settings__contacts'>
              <h3 className='settings__title_three'>Contacts:</h3>
              <h4>Github:</h4>
              <Field name='contacts.github' placeholder='github' />
              <h4>Facebook:</h4>
              <Field name='contacts.facebook' placeholder='facebook' />
              <h4>Instagram:</h4>
              <Field name='contacts.instagram' placeholder='instagram' />
              <h4>Twitter:</h4>
              <Field name='contacts.twitter' placeholder='twitter' />
              <h4>Your website:</h4>
              <Field name='contacts.website' placeholder='website' />
              <h4>Your chanel:</h4>
              <Field name='contacts.youtube' placeholder='youtube' />
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
export default connect(mapStateToProps, { putProfileThunk })(SettingsContainer);
