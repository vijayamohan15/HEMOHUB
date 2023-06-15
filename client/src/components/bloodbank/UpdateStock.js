import Axios from "axios";
import React, { useState, useEffect } from "react";

import "../../assets/css/UpdateStock.css";
import wt from "../../assets/img/wit.jpg";
import bdrop from "../../assets/img/bdrop.png";

const UpdateStock = () => {

  const [unitUpdate, setunitUpdate] = useState(0);
  const [bloodTable, setbloodTable] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/login/emp/ub", (req, res) => {}).then(
      (response) => {
        setbloodTable(response.data);
      }
    );
  });
  const ubStock = (b_id) => {
    Axios.put("http://localhost:3001/login/emp/ub/update", {
      b_id: b_id,
      unitUpdate: unitUpdate,
    }).then(setunitUpdate(""));
  };
  return (
    <>
    <img src={wt} alt="wt" className='wt'></img>
      <a href="/login/emp/dash">
        <img src={bdrop} alt="bdroplogo" className="navb" />
      </a>
    <div className="dashboard">
      <h1>UPDATE BLOOD STOCK</h1>
      
      <table className="update-blood-table">
        <thead>
          <tr>
            <th>Blood Group</th>
            <th>Unit </th>
          </tr>
        </thead>
        <tbody>
          {bloodTable.map((val) => {
            return (
              <tr key={val.b_id}>
                <td>{val.blood_group}</td>
                <td>{val.unit}</td>
                <input
                  type="number"
                  onChange={(e) => {
                    setunitUpdate(e.target.value);
                  }}
                />
                <button onClick={() => ubStock(val.b_id)}>UPDATE</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};
export default UpdateStock;
