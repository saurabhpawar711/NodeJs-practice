import React, { useState, useRef } from "react";

import Modal from "./Modal";
import "./Form.css";

const Form = (props) => {
  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");
  const [modal, setModal] = useState(false);
  const [modalError, setModalError] = useState("");

  const usernameRef = useRef();
  const ageRef = useRef();
  const collegeRef = useRef();

  // const usernameHandler = (event) => {
  //   setUsername(event.target.value);
  // };

  // const ageHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const getUserDetails = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const age = ageRef.current.value;
    const college = collegeRef.current.value;
    if (username.trim() === "" || age.trim() === "" || college.trim() === "") {
      setModal(true);
      setModalError("Please enter valid inputs (non-empty values)");
      return;
    } else if (Number(age) <= 0) {
      setModal(true);
      setModalError("Please enter valid age (>0)");
      return;
    }
    const userData = {
      username,
      age,
      college,
    };
    props.userData(userData);
    usernameRef.current.value = "";
    ageRef.current.value = "";
    collegeRef.current.value = "";
    // setUsername("");
    // setAge("");
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
          // value={username}
          // onChange={usernameHandler}
          ref={usernameRef}
          className="input-field"
        />
        <label>Age(Years)</label>
        <input
          type="number"
          className="input-field"
          // value={age}
          // onChange={ageHandler}
          ref={ageRef}
        />
        <label>College Name</label>
        <input type="text" className="input-field" ref={collegeRef} />
        <button className="add-user-btn">Add User</button>
      </form>
    </>
  );
};

export default Form;
