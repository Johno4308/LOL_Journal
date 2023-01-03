import React from "react";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Nav />
      <div className={classes.header__menu}></div>
    </header>
  );
};

export default Header;
