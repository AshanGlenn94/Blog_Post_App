import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div className="user">
            <h2>{user.name}</h2>
            <h3>Email : {user.email}</h3>
            <h3>City : {user.address.city}</h3>
            <h3>Website : {user.website}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default Users;
