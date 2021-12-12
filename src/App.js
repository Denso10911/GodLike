import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faSearch,
  faShoppingCart,
  faSignInAlt,
  faGamepad,
  faFire,
  faMedal,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'

import './App.css'
import Header from './Compotents/Header/Header'
import Border from './Compotents/PageBorder/Border'
import Pages from './Compotents/Pages/Pages'

const App = () => {
  return (
    <div className="body">
      <Header />
      <Border />
      <Pages />
    </div>
  )
}

library.add(
  fab,
  faSearch,
  faShoppingCart,
  faSignInAlt,
  faGamepad,
  faFire,
  faMedal,
  faHeart
)

export default App
