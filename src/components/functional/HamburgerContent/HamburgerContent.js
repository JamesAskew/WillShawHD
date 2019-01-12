import React from "react";
import MenuLinks from "../MenuLinks/MenuLinks";

import "./HamburgerContent.css";

const HamburgerContent = props => {
  const classes = ["hamburger-menu-box"];
  if (props.showMenu) {
    classes.push("show-me");
  }
  return (
    <aside className={classes.join(" ")}>
      <div className="menu">
        <MenuLinks toggleMenu={props.toggleMenu} />
      </div>
    </aside>
  );
};
export default HamburgerContent;
