import React from "react";
import Header from "../../Header/Header";
import SimpleHero from "../../Header/SimpleHero/SimpleHero";

const Portfolio = props => {
  return (
    <Header
      SimpleHero={true}
      toggleMenu={props.toggleMenu}
      showMenu={props.showMenu}
    >
      <SimpleHero Title="PORTFOLIO" />
    </Header>
  );
};

export default Portfolio;
