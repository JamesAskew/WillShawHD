import React from "react";
import ReactDOM from "react-dom";
import "./modalContent.css";
const ModalContent = props => {
  return ReactDOM.createPortal(
    <aside
      className="c-modal-cover"
      tabIndex="-1"
      onKeyDown={props.onKeyDown}
      onClick={props.onClickAway}
    >
      <div className="c-modal" ref={props.modalRef}>
        <button
          className="c-modal__close"
          aria-label="Close Modal"
          onClick={props.onClick}
        >
          <span className="u-hide-visually">Close</span>
          <svg className="c-modal__close-icon" viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        <div className="c-modal__body">CONTENT WILL GO HERE</div>
      </div>
    </aside>,
    document.body
  );
};
export default ModalContent;
