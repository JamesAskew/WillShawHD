import React from "react";
import { Link } from "react-router-dom";
import "./navabar.css";
import LightLogo from "../../../assets/images/logo-light.png";
import ColouredLogo from "../../../assets/images/logo-colored.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="index.html" className="transition">
          <img src={LightLogo} alt="React logo" className="logo-light" />
          <img src={ColouredLogo} alt="React logo" className="logo-colored" />
        </a>
      </div>

      <div className="hamburger-menu">
        <span /> <span /> <span />
      </div>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link transition">
            HOME
          </Link>
          <ul>
            <li>
              <a href="#" className="transition">
                PORTFOlIO GRID
              </a>
            </li>
            <li>
              <a href="#" className="transition">
                VIDEO
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link transition">
            ABOUT
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link transition">
            PORTFOlIO
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link transition">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
