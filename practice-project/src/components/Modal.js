import React from "react";

import "./Modal.css";

const Modal = (props) => {
  const closeModal = () => {
    props.closeModal();
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Invalid Input</h2>
        <p>{props.errorMessage}</p>
        <button onClick={closeModal} className="modal-btn">
          Okay
        </button>
      </div>
    </div>
  );
};

export default Modal;
