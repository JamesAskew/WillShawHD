import React from "react";
import Header from "../../Header/Header";
import SimpleHero from "../../Header/SimpleHero/SimpleHero";

const Contact = () => {
  return (
    <Header SimpleHero={true}>
      <SimpleHero Title="GET IN TOUCH" Summary="" />
    </Header>
  );
};

export default Contact;
