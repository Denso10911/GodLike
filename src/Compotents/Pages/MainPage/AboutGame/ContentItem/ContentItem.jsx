import './ContentItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ContentItem = (props) => {
  return (
    <div className="content__item ">
      <FontAwesomeIcon icon={props.icon} />
      <h3 className="content__title">{props.title}</h3>
      <p className="content__text">{props.text}</p>
    </div>
  )
}

export default ContentItem
