import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import EmployeeRegister from "../employee/employeeRegister";
import EmployeeLogin from "../employee/employeeLogin";
import wt from "../../assets/img/wit.jpg";
import bdrop from "../../assets/img/bdrop.png";


import "../../assets/css/emplog.css";

const EmpLog = () => {
  return (
    <div className="donate">
      <img src={wt} alt="wt" className='wt'></img>
      
      <Link to="/reg/emp">
        <button>REGISTER</button>
      </Link>
      <Link to="/login/emp">
        <button>LOGIN</button>
      </Link>

      <Routes>
        <Route path="/login/emp" component={EmployeeLogin} />
        <Route path="/reg/emp" component={EmployeeRegister} />
      </Routes>
    </div>
  );
};

export default EmpLog;
