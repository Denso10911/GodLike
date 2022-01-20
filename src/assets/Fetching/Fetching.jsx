import React from 'react'
import './Fetching.css'
import preloadingImg from '../images/Preloader.svg'

const Fetching = () => {
  return (
    <div className='fetching'>
      <img src={preloadingImg} alt='' />
    </div>
  )
}

export default Fetching
