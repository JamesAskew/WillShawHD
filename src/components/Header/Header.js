import React from "react";
import Navbar from "./Navbar/Navbar";
import "./header.css";

const Header = props => {
  const classes = ["header"];
  if (props.SimpleHero) {
    classes.push("int-header");
  }

  return (
    <header className={classes.join(" ")}>
      <Navbar toggleMenu={props.toggleMenu} showMenu={props.showMenu} />
      {/* <HamburgerContent
        showMenu={props.showMenu}
        toggleMenu={props.toggleMenu}
      /> */}
      {props.children}
    </header>
  );
};

export default Header;
