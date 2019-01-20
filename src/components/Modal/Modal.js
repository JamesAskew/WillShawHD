import React, { Component, Fragment } from "react";
import ModalTrigger from "./ModalTrigger";
import ModalContent from "../ModalContent/ModalContent";

class Modal extends Component {
  state = { isOpen: false };

  onOpen = () => {
    this.setState({ isOpen: true });
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };

  onKeyDown = event => {
    return event.keyCode === 27 && this.onClose();
  };

  onClickAway = e => {
    if (this.modalNode && this.modalNode.contains(e.target)) return;
    this.onClose();
  };

  render() {
    const { isOpen } = this.state;

    return (
      <Fragment>
        <ModalTrigger
          triggerImage={this.props.triggerImage}
          onClick={this.onOpen}
        >
          {this.props.children}
        </ModalTrigger>
        {isOpen && (
          <ModalContent
            onClick={this.onClose}
            onClickAway={this.onClickAway}
            onKeyDown={this.onKeyDown}
            modalRef={n => (this.modalNode = n)}
          >
            {this.props.children}
          </ModalContent>
        )}
      </Fragment>
    );
  }
}

export default Modal;
