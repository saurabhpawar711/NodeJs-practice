import React from "react";
import "./UserList.css";

const UserList = (props) => {
  const userData = props.userData;
  return (
    <>
      {userData.length === 0 && <h2 style={{color: "#fff"}}>No users!!!</h2>}
      {userData.length > 0 && (
        <div className="userlist">
          <ul>
            {userData.map((user) => (
              <li className="username" key={user.id}>
                {user.username} ( {user.age} years old )
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default UserList;
