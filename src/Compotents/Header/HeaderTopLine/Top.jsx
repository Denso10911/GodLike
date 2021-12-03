import Contacts from './Contacts'
import Social from './Social'
import style from './StyleTopLine/Top.module.css'
import React from 'react'

const Top = () => {
  return (
    <div className={style.top__vrape}>
      <div className={style.top__container}>
        <Contacts />
        <Social />
      </div>
    </div>
  )
}

export default Top
