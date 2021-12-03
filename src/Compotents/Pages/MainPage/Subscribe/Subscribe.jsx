import './Subscribe.css'
import React from 'react'

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe__title">Subscribe to our Newsletter</div>
      <div className="subscribe__send">
        <div className="subscribe__area">
          <div className="subscribe__input">Email*</div>
          <p className="subscribe__text">
            We'll never share your email with anyone else.
          </p>
        </div>
        <div className="subscribe__button">Subscribe</div>
      </div>
    </div>
  )
}

export default Subscribe
