import React from "react";

import Header from "../../Header/Header";
import SimpleHero from "../../Header/SimpleHero/SimpleHero";

const About = () => {
  return (
    <Header SimpleHero={true}>
      <SimpleHero Title="ABOUT ME" Summary="Lorem ipsum dolar something" />
    </Header>
  );
};

export default About;
