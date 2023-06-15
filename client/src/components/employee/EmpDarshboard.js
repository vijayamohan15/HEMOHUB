import React from "react";


import "../../assets/css/EmpDashboard.css";
import wt from "../../assets/img/wit.jpg";
import bdrop from "../../assets/img/bdrop.png";

const EmpDashBoard = () => {
  return (
    <div className="emp-dashboard">
      <img src={wt} alt="wt" className='wt'></img>
      <a href="/login/emp/dash">
        <img src={bdrop} alt="bdroplogo" className="navb" />
      </a>
      <a href="/login/emp/uh">
        <button>UPDATE HEALTH</button>
      </a>
      <a href="/login/emp/ub">
        <button>UPDATE BLOOD STOCK</button>
      </a>
      <a href="/login/emp/hr">
        <button>HANDLE REQUEST</button>
      </a>
    </div>
  );
};

export default EmpDashBoard;
