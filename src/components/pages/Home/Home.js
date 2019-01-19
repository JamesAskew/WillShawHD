import React from "react";

import Header from "../../Header/Header";
import PortfolioHero from "../../Header/PortfolioHero/PortfolioHero";

import Modal from "../../Modal/Modal";

const Home = props => {
  return (
    <div>
      <Header toggleMenu={props.toggleMenu} showMenu={props.showMenu}>
        <PortfolioHero />
      </Header>
      <Modal />
    </div>
  );
};

export default Home;
