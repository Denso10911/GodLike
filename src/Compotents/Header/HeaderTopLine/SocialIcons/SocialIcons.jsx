import React from 'react'

const SocialIcons = (props) => {
  return (
    <div className="socialIcon">
      <span className="hover_effect">
        <span className="hover__effect_r">
          <span>{props.icon}</span>
        </span>
        <span className="hover__effect_l">
          <span>{props.icon}</span>
        </span>
        <span className="hover__effect_shade">{props.icon}</span>
      </span>
    </div>
  )
}
export default SocialIcons
