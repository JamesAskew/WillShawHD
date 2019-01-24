import React from "react";
import lightLogo from "../../assets/images/logo-light.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src={lightLogo} alt="Image" className="logo" />
            <p>
              Interactive digital experiences are continually becoming more
              amazing and more complex to produce.
              <br />
              Our team is specially designed to create successful, custom, inn
            </p>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Behance</a>
              </li>
              <li>
                <a href="#">Dribbble</a>
              </li>
            </ul>
            <small>© 2018 Coddle | All Rights Reserved.</small>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
