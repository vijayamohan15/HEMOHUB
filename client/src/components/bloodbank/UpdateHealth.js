import React, { useState, useEffect } from "react";
import Axios from "axios";

import '../../assets/css/UpdateHealth.css'
import wt from "../../assets/img/wit.jpg";
import bdrop from "../../assets/img/bdrop.png";

const UpdateHealth = () => {
  var [userId, setuserId] = useState("");
  const [searchList, setsearchList] = useState([]);
  const [userVitals, setuserVitals] = useState("");
  const [userHeight, setuserHeight] = useState("");
  const [userWeight, setuserWeight] = useState("");
  const [userStatus, setuserStatus] = useState("");

  useEffect(() => {
    Axios.post("http://localhost:3001/login/emp/uh", {
      userId: userId,
    }).then((response) => {
      setsearchList(response.data);
    });
  });

  const updateUserData = (userId) => {
    Axios.put("http://localhost:3001/login/emp/uh", {
      user_id: userId,
      userVitals: userVitals,
      userHeight: userHeight,
      userWeight: userWeight,
      userStatus: userStatus,
    }).then((response) => {
      alert(response.data.message);
    });
  };

  return (
    <div className="search">
      <img src={wt} alt="wt" className='wt'></img>
      <a href="/login/emp/dash">
        <img src={bdrop} alt="bdroplogo" className="navb" />
      </a>
      {" "}
      <form>
        <input
          type="text"
          placeholder="USER ID"
          name="userId"
          onChange={(e) => {
            setuserId(e.target.value);
          }}
          required
        />
      </form>
      <table className="blood-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>PHONE </th>
            <th>PLACE</th>
            <th>BLOODGROUP</th>
          </tr>
        </thead>
        <tbody>
          {searchList.map((val) => {
            return (
              <tr key={val.user_id}>
                <td>{val.userFName}</td>
                <td>{val.userPhone}</td>
                <td>{val.userPlace}</td>
                <td>{val.userBloodGroup}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form className="updatehealth">
        <input
          type="text"
          placeholder="VITALS"
          onChange={(e) => {
            setuserVitals(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="HEIGHT"
          onChange={(e) => {
            setuserHeight(e.target.value);
          }}
        />{" "}
        <input
          type="number"
          placeholder="WEIGHT"
          onChange={(e) => {
            setuserWeight(e.target.value);
          }}
        />{" "}
        <input
          type="text"
          placeholder="DONAR STATUS"
          onChange={(e) => {
            setuserStatus(e.target.value);
          }}
        />
        <button onClick={() => updateUserData(userId)}>UPDATE</button>
      </form>
    </div>
  );
};
export default UpdateHealth;
