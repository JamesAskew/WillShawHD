import React from "react";
import Navbar from "./Navbar/Navbar";
import "./header.css";

const Header = props => {
  return (
    <header className="header">
      <Navbar />
      {props.children}
    </header>
  );
};

export default Header;
