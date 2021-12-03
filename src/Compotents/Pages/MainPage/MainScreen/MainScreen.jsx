import './StylesMainScreen/MainScreen.css'
import React from 'react'

const MainScreen = () => {
  return (
    <div className="mainScreen">
      <h1 className="title">GodLike</h1>
      <div className="buttons">
        <a href="/#" className="button button_l">
          <span>Purchase</span>
        </a>
        <a href="/#" className="button button_r">
          <span>Documentation</span>
        </a>
      </div>
    </div>
  )
}

export default MainScreen
