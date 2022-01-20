import React from "react";
import { Formik, Field, Form } from "formik";

const PostMessageForm = (props) => {
  return (
    <Formik
      initialValues={{
        post: "",
      }}
      onSubmit={(values) => {
        console.log(values);
        props.setMyNewPost(values.post);
      }}
    >
      <Form>
        <Field id='post' name='post' placeholder='Messge' />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default PostMessageForm;
