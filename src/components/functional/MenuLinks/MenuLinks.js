import React from "react";
import { Link } from "react-router-dom";

const MenuLinks = props => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link transition" onClick={props.toggleMenu}>
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
        <Link
          to="/about"
          className="nav-link transition"
          onClick={props.toggleMenu}
        >
          ABOUT
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className="nav-link transition"
          onClick={props.toggleMenu}
        >
          PORTFOlIO
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className="nav-link transition"
          onClick={props.toggleMenu}
        >
          CONTACT
        </Link>
      </li>
    </ul>
  );
};
export default MenuLinks;
