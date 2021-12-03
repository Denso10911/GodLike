import Content from './Content'
import Description from './Description'
import './StyleAboutGame/AboutGame.css'
import React from 'react'

const AboutGame = () => {
  return (
    <div className="aboutGame">
      <Description />
      <Content />
    </div>
  )
}

export default AboutGame
