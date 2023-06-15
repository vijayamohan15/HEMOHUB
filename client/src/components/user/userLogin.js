import React, { useState } from "react";
import Axios from "axios";


import "../../assets/css/UserLogin.css";
import wt from "../../assets/img/wit.jpg";

const UserLogin = () => {
  const [userUserName, setuserUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");

   var flag=false;

  const userLoginCheck = () => {
    Axios.post("http://localhost:3001/login/usr", {
      userUserName: userUserName,
      userPassword: userPassword,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } 
      else{
        alert("Welcome");
        flag=true;
      }
      if(flag){
        window.location.replace("http://localhost:3000/home");
      }
    });
    
  };

  return (
    <div className="user-login">
      <img src={wt} alt="wt" className='wt'></img>
      <h2>USER LOGIN</h2>
      <form>
        <input
          name="username"
          type="text "
          placeholder="username"
          onChange={(e) => {
            setuserUserName(e.target.value);
          }}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
          required
        />
        <button onClick={userLoginCheck}>Submit</button>
      </form>
    </div>
  );
};

export default UserLogin;
