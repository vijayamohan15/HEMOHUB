import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../assets/css/Dashboard.css";



const Dashboard = () => {

  const [bloodTable, setbloodTable] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/home")
      .then(function (response) {
        setbloodTable(response.data)
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>BLOOD STOCK</h1>

      <table className="blood-table">
        <thead>
          <tr>
            <th>BLOOD GROUP</th>
            <th>UNIT</th>
          </tr>
        </thead>
        <tbody>
          {bloodTable.length > 0 && bloodTable.map((val) => {
            return (
              <tr key={val.b_id}>
                <td>{val.blood_group}</td>
                <td>{val.unit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
