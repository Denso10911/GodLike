import React from 'react'
import './RenderField.css'

const renderField = ({ input, label, type, meta: { touched, error, warning }, ...props }) => {
  return (
    <div className={`form inputError ${error && touched ? 'error' : ''}`}>
      <input {...input} placeholder={label} type={type} className={props.className} />
      {touched && ((error && <span>{`* ${error}`}</span>) || (warning && <span>{warning}</span>))}
    </div>
  )
}

export default renderField
