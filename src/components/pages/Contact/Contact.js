import React from "react";
import Header from "../../Header/Header";
import SimpleHero from "../../Header/SimpleHero/SimpleHero";

const Contact = props => {
  return (
    <Header
      SimpleHero={true}
      toggleMenu={props.toggleMenu}
      showMenu={props.showMenu}
    >
      <SimpleHero Title="GET IN TOUCH" Summary="" />
    </Header>
  );
};

export default Contact;
