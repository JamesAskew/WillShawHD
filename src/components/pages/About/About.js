import React from "react";

import Header from "../../Header/Header";
import SimpleHero from "../../Header/SimpleHero/SimpleHero";

const About = props => {
  return (
    <Header
      SimpleHero={true}
      toggleMenu={props.toggleMenu}
      showMenu={props.showMenu}
    >
      <SimpleHero Title="ABOUT ME" Summary="Lorem ipsum dolar something" />
    </Header>
  );
};

export default About;
