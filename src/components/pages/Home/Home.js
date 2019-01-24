import React from "react";

import Header from "../../Header/Header";
import PortfolioHero from "../../Header/PortfolioHero/PortfolioHero";

import Modal from "../../Modal/Modal";
import WideCta from "../../WideCta/WideCta";

const Home = props => {
  const button = {
    link: "https://www.google.com/",
    text: "GET IN TOUCH"
  };
  return (
    <div>
      <Header toggleMenu={props.toggleMenu} showMenu={props.showMenu}>
        <PortfolioHero />
      </Header>
      <Modal />
      <WideCta
        title="LET'S WORK TOGETHER"
        content="If you’re shuddering and thinking “Is this as good as it gets?” and wouldn’t even consider staying in the same job, company, or industry for the next decade, you’re not alone."
        button={button}
      />
    </div>
  );
};

export default Home;
