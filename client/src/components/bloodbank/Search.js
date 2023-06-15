import React, { useState, useEffect } from "react";
import Axios from "axios";

import "../../assets/css/Search.css";

const Search = () => {

  var [place, setplace] = useState("");
  var [blood, setblood] = useState("");
  const [searchList, setsearchList] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:3001/home/search", {
      place: place,
      blood: blood,
    }).then((response) => {
      if (response.data.message) {
      } else {
        setsearchList(response.data);
      }
    });
  },[blood, place]);

  return (
    <div className="search">
      {" "}
      <form>
        <input
          type="text"
          placeholder="PLACE"
          name="place"
          onChange={(e) => {
            setplace(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="BLOOD GROUP"
          name="bloodGroup"
          onChange={(e) => {
            setblood(e.target.value);
          }}
        />
      </form>
      <table className="blood-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone </th>
            <th>Place</th>
            <th>BloodGroup</th>
          </tr>
        </thead>
        <tbody>
          {searchList.map((val,i) => {
            return (
              <tr key={i}>
                <td>{val.userFName}</td>
                <td>{val.userPhone}</td>
                <td>{val.userPlace}</td>
                <td>{val.userBloodGroup}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
