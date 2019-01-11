import React from "react";

const SimpleHero = props => {
  return (
    <div class="inner">
      <h2>{props.Title}</h2>
      <h6>{props.Summary}</h6>
      {props.children}
    </div>
  );
};
export default SimpleHero;
