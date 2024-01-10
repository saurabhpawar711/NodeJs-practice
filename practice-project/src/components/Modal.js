import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

const ModalOverlay = (props) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Invalid Input</h2>
        <p>{props.errorMessage}</p>
        <button onClick={props.onConfirm} className="modal-btn">
          Okay
        </button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  const closeModal = () => {
    props.closeModal();
  };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay
          errorMessage={props.errorMessage}
          onConfirm={closeModal}
        />,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default Modal;
