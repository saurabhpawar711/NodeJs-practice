import React, { useState } from "react";

import Modal from "./Modal";
import "./Form.css";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [modal, setModal] = useState(false);
  const [modalError, setModalError] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const getUserDetails = (event) => {
    event.preventDefault();
    if (username.trim() === "" || age.trim() === "") {
      setModal(true);
      setModalError("Please enter valid name and age (non-empty values)");
      return;
    } else if (Number(age) <= 0) {
      setModal(true);
      setModalError("Please enter valid age (>0)");
      return;
    }
    const userData = {
      username,
      age,
    };
    props.userData(userData);
    setUsername("");
    setAge("");
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      {modal && <Modal errorMessage={modalError} closeModal={closeModal} />}
      <form className="form" onSubmit={getUserDetails}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={usernameHandler}
          className="input-field"
        />
        <label>Age(Years)</label>
        <input
          type="number"
          className="input-field"
          value={age}
          onChange={ageHandler}
        />
        <button className="add-user-btn">Add User</button>
      </form>
    </>
  );
};

export default Form;
