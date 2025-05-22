import React from "react";
import Logo from "../assets/ArknightsLingBean2.png"
import { Link } from "react-router-dom";
import "../css/Navbar.css"

function Navbar() {
  
    return (
      <div className="navbar">
        <div className="leftSide">
        <img src = {Logo}></img>
        </div>
        <div className="rightSide">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/contacts"> Contact </Link>
            <Link to="/portfolio"> Portfolio </Link>
        </div>
      </div>
    );
  }
  
  export default Navbar;