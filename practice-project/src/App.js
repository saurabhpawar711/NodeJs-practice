import React, { useState } from "react";

import Form from "./components/Form";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  const getNewUserData = (userData) => {
    setUserData((prevValue) => [...prevValue, userData]);
  };
  return (
    <div className="app">
      <Form userData={getNewUserData} />
      <UserList userData={userData} />
    </div>
  );
}

export default App;
