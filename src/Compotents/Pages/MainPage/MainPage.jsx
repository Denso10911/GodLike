import Bottom from '../../Bottom/Bottom'
import AboutGame from './AboutGame/AboutGame'
import MainScreen from './MainScreen/MainScreen'
import Subscribe from './Subscribe/Subscribe'
import React from 'react'

const MainPage = () => {
  return (
    <div className="body">
      <MainScreen />
      <AboutGame />
      <Subscribe />
      <Bottom />
    </div>
  )
}

export default MainPage
