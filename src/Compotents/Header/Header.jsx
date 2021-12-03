import Menu from './HeaderMenu/Menu'
import Top from './HeaderTopLine/Top'
import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <Top />
      <Menu />
    </div>
  )
}

export default Header
