import React from "react";
const ModalTrigger = props => {
  return (
    <div className="grid__link" onClick={props.onClick}>
      <div className="layer" />
      <div className="layer" />
      <div className="layer" />
      {props.triggerImage}
    </div>
  );
};

// <button onClick={props.onClick}>This is a button to trigger the Modal</button>

export default ModalTrigger;
