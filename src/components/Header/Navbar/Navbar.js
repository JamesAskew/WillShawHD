import React, { Component } from "react";

import "./navabar.css";
import LightLogo from "../../../assets/images/logo-light.png";
import ColouredLogo from "../../../assets/images/logo-colored.png";
import Hamburger from "./Hamburger/Hamburger";
import MenuLinks from "../../functional/MenuLinks/MenuLinks";

import HamburgerContent from "../../functional/HamburgerContent/HamburgerContent";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => {
      return { showMenu: !prevState.showMenu };
    });
  }

  render() {
    return (
      <div>
        <HamburgerContent
          showMenu={this.state.showMenu}
          toggleMenu={this.toggleMenu}
        />
        <nav className="navbar">
          <div className="logo">
            <a href="index.html" className="transition">
              <img src={LightLogo} alt="React logo" className="logo-light" />
              <img
                src={ColouredLogo}
                alt="React logo"
                className="logo-colored"
              />
            </a>
          </div>

          <Hamburger
            toggleMenu={this.toggleMenu}
            showMenu={this.state.showMenu}
          />

          <MenuLinks />
        </nav>
      </div>
    );
  }
}

export default Navbar;
