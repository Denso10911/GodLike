import Logo from './Logo'
import NavIcons from './NavIcons'
import Navigation from './Navigation'
import style from './StyleMenu/Menu.module.css'

const Menu = () => {
  return (
    <div className={style.menu__vraper}>
      <div className={style.menu__container}>
        <Logo />
        <Navigation />
        <NavIcons />
      </div>
    </div>
  )
}
export default Menu
