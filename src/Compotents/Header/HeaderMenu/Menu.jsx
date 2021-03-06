import Logo from "./Logo";
import LoginContainer from "./Login/LoginContainer";
import Navigation from "./Navigation";
import style from "./StyleMenu/Menu.module.css";
import React from "react";

const Menu = () => {
  return (
    <div className={style.menu__wrapper}>
      <div className={style.menu__container}>
        <Logo />
        <Navigation />
        <LoginContainer />
      </div>
    </div>
  );
};
export default Menu;
