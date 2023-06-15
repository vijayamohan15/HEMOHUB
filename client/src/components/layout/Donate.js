import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import UserRegister from "../user/userRegister";
import UserLogin from "../user/userLogin";

import "../../assets/css/Donate.css";
import wt from "../../assets/img/wit.jpg";

const Donate = () => {
  return (
    <div className="donate">
      <img src={wt} alt="wt" className='wt'></img>
      <Link to="/reg/usr">
        <button>REGISTER</button>
      </Link>
      <Link to="/login/usr">
        <button>LOGIN</button>
      </Link>

      <Routes>
        <Route path="/reg/usr" component={UserRegister} />
        <Route path="/login/usr" component={UserLogin} />
      </Routes>
    </div>
  );
};

export default Donate;
