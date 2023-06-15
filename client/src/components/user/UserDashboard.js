import React from "react";

import "../../assets/css/UserDash.css";

const UserDashboard = () => {

  const donate = () => {
    alert("WE WILL GET IN TOUCH WITH YOU!");
  };

  const request =()=>{
      window.location='/request'
  }


  return (
    <div className="user-dash">
      <button onClick={donate}>DONATE</button>
      <button onClick={request}>REQUEST</button>
    </div>
  );
};
export default UserDashboard;
