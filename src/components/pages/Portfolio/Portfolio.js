import React from "react";
import Header from "../../Header/Header";
import SimpleHero from "../../Header/SimpleHero/SimpleHero";

const Portfolio = () => {
  return (
    <Header SimpleHero={true}>
      <SimpleHero Title="PORTFOLIO" />
    </Header>
  );
};

export default Portfolio;
