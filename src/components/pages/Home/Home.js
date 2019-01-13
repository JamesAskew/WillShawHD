import React from "react";

import Header from "../../Header/Header";
import PortfolioHero from "../../Header/PortfolioHero/PortfolioHero";

const Home = props => {
  return (
    <div>
      <Header toggleMenu={props.toggleMenu} showMenu={props.showMenu}>
        <PortfolioHero />
      </Header>
    </div>
  );
};

export default Home;
