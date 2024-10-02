import React from 'react'
import Login from "./login/Login";
import Signup from "./signup/Signup";

//Figure out where css will be placed
import "../../main.css";
import "./LogOrSign.css";


const LogOrSign = ({setIsLoggedIn, setLoggedUser}) => {
  return (
    <div className="flex flex-column container">
      <div className="flex flex-row inner-container logOrSign-container">
        <Login setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn}/>
        <Signup setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn}/>
      </div>
    </div>
  )
};

export default LogOrSign;