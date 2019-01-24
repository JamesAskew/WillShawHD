import React from "react";

import emailIcon from "../../assets/images/contact-icon01.png";
import phoneIcon from "../../assets/images/contact-icon02.png";
import markerIcon from "../../assets/images/contact-icon04.png";

const FooterContactInfo = () => {
  return (
    <section className="footer-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <figure>
              <img src={emailIcon} alt="Image" />
            </figure>
            <h4>E-MAIL</h4>
            <address>info@coddle.com.br</address>
          </div>
          <div className="col-md-4">
            <figure>
              <img src={phoneIcon} alt="Image" />
            </figure>
            <h4>PHONE</h4>
            <address>+380 (98) 294 80 86</address>
          </div>
          <div className="col-md-4">
            <figure>
              <img src={markerIcon} alt="Image" />
            </figure>
            <h4>LOCATION</h4>
            <address>Ring Central 796 A/3, Chicago</address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterContactInfo;
