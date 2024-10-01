// import React from 'react'
import {useState} from "react";

//Figure out what needs to go here
// import {loginFetch} from "../../../fetch";

import "./Login.css";



const Login = ({setLoggedUser, setIsLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  }

  const testLogin = (username, password) => {
    console.log(username, password);
    return {
      message: "success",
      user: {
        id: 1,
        username: "danny",
      },
    }
  };

  const handleSumbit  = async (e) => {
    e.preventDefault();
    const data = await loginFetch(username, password);
    if (data.message === "success") {
      setLoggedUser(data);
      setIsLoggedIn(true);
    };
  };

  return (
    <div className="flex flex-column login">
      <form
        onSubmit={(e) => handleSumbit(e)}
        className="flex flex-column login-form"
      >
        <h3>Login</h3>
        <div>
          <input
            onChange={(e) => handleChange(e, setUsername)}
            type="text"
            placeholder="Username"
            />
            <input
            onChange={(e) => handleChange(e, setPassword)}
            type="text"
            placeholder="Password"
            />
            </div>
            <button type="Submit">Login</button>
          </form>
        </div>
  )
};

export default Login;