import React from 'react'
import logo from "../images/logo.png";
import searchIcon from "../images/search.png";
import menuImage from "../images/menu.png";
import "../style/navbar.css";

export default function navbar() {
  return (
    <div>
      {/* Navigation */}
      <nav className="nav-container">
        <img src={logo} alt="" className="logo" />

        {/* <div className="input-container">
          <input type="text" placeholder="Enter your habit name ..." />
          <img src={searchIcon} alt="" className="search-icon" />
        </div> */}

        <div className="menu-profpic-container">
          <img src={menuImage} alt="" className="nav-imgs" />
          {/* <img src={profPic} alt="" className="nav-imgs" /> */}
          <p>Log in</p>
          <p>Sign up</p>
        </div>
      </nav>
    </div>
  );
}
