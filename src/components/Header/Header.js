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
      <Navbar />
      {props.children}
    </header>
  );
};

export default Header;
