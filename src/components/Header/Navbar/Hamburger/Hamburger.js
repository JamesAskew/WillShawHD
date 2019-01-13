import React from "react";

import "./Hamburger.css";

const Hamburger = props => {
  const classes = ["hamburger-menu"];
  if (props.showMenu) {
    classes.push("open");
  }

  return (
    <div className={classes.join(" ")} onClick={props.toggleMenu}>
      <span /> <span /> <span />
    </div>
  );
};
export default Hamburger;
