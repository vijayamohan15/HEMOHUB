import React, { useState } from "react";
import Axios from "axios";

import "../../assets/css/EmployeeLogin.css";
import wt from "../../assets/img/wit.jpg";
//import bdrop from "../../assets/img/bdrop.png";

const EmployeeLogin = () => {
  const [empUserName, setempUsername] = useState("");
  const [empPassword, setempPassword] = useState("");
  //var flag=false;


  const empLoginCheck = () => {
    Axios.post("http://localhost:3001/login/emp", {
      empUserName: empUserName,
      empPassword: empPassword,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        alert("WELCOME!");
        window.location.replace("http://localhost:3000/login/emp/dash");
      }
    });
    
  };

  return (
    <div className="emp-login">
      <img src={wt} alt="wt" className='wt'></img>

      <h2>EMPLOYEE LOGIN</h2>
      <form>
        <input
          name="username"
          type="text "
          placeholder="username"
          onChange={(e) => {
            setempUsername(e.target.value);
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={(e) => {
            setempPassword(e.target.value);
          }}
        />
        <button onClick={empLoginCheck}>
          SUBMIT
        </button>
      </form>
      
    </div>
  );
};

export default EmployeeLogin;
