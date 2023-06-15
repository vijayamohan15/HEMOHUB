import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../assets/css/home.css";
import logo from "../../assets/img/logo1.png";
import bg from "../../assets/img/bg.jpg";
import wt from "../../assets/img/wit.jpg";

export default function Home() {
  const navi=useNavigate();
  const goHome=()=>{
    navi('/donate');
  };
  const goEmp=()=>{
  navi('/emplog');
  };
  return (
    <>
    <div className='bgc'>
    <img src={logo} alt="logo1" className='logo1'></img>
    <button className='button1' onClick={goHome}>User</button>
    <button className='button2' onClick={goEmp}>Employee</button>
    <img src={bg} alt="bg" className='bg'></img>
    <img src={wt} alt="wt" className='wt'></img>
    <img src={wt} alt="wt" className='wt1'></img>
    </div>
    </>
  )
}


