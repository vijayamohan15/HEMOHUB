import React from "react";
import bdrop from "../../assets/img/bdrop.png";
import SearchPage from "./SearchPage";
import nav from "../../assets/img/nav.png"

import "../../assets/css/Navbar.css";


const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/home">
        <img src={bdrop} alt="bdroplogo" className="navbl" />
      </a>
      <a href="/login/usr/dash">DONATE/REQUEST</a>
      <SearchPage />
      <a href="/">
      <img src={nav} alt="nav" className="navbg"></img>
      </a>
    </nav>
  );
};

export default Navbar;
