import style from './StyleTopLine/Contacts.module.css'
import React from 'react'

const Contacts = () => {
  return (
    <div className={style.container}>
      <div className="legnuages">USA</div>
      <div className="privacy">
        <a href="/#" className="">
          Privacy
        </a>
      </div>
      <div className="contact">Contact</div>
    </div>
  )
}

export default Contacts
