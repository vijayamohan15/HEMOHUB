import React, { useState, useEffect } from "react";
import Axios from "axios";

import "../../assets/css/HandleRequest.css";
import wt from "../../assets/img/wit.jpg";
import bdrop from "../../assets/img/bdrop.png";

const HandleRequest = () => {
  const [RequestTable, setRequestTable] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/login/emp/hr").then((response) => {
      if (response) {
        setRequestTable(response.data);
      } else {
        alert("error in retrieving request table");
      }
    });
  });

  const serveRequest = (req_id) => {
const delUrl = "http://localhost:3001/login/emp/hr/"+req_id;
    Axios.delete( delUrl).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      }
    });
  };
  return (
    <div className="handle-request">
      <img src={wt} alt="wt" className='wt'></img>
      <a href="/login/emp/dash">
        <img src={bdrop} alt="bdroplogo" className="navb" />
      </a>
      <h1>REQUEST TABLE</h1>
      <table className="req-table">
        <thead>
          <th>REQ-ID</th>
          <th>BLOOD GROUP</th>
          <th>UNIT</th>
          <th>Reason</th>
          <th>Status</th>
        </thead>
        <tbody>
          {RequestTable.map((request, i) => {
            return (
              <tr key={i}>
                <td>{request.req_id}</td>
                <td>{request.blood_group}</td>
                <td>{request.unit}</td>
                <td>{request.reason}</td>
                <td>{request.status}</td>
                <button
                  onClick={() => {
                    serveRequest(request.req_id);
                  }}
                >
                  ACCEPT/SERVE
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HandleRequest;
