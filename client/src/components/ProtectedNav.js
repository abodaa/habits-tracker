import React from "react";
import logo from "../images/logo.png";
import searchIcon from "../images/search.png";
import menuImage from "../images/menu.png";
import profPic from "../images/user.png";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import "../style/navbar.css";

const cookies = new Cookies();
let token = cookies.get("TOKEN");


export default function Navbar() {
const logout = () => {
  // destroy the cookie
  cookies.remove("TOKEN", { path: "/" });
  // redirect user to the landing page
  window.location.href = "/";
};

  return (
    <div>
      {/* Navigation */}
      <nav className="nav-container">
        <div className="logo-help-btn">
          <img src={logo} alt="" className="logo" />
          <button className="nav-btn-one">Help me AI</button>
        </div>

        {/* <div className="input-container">
          <input type="text" placeholder="Enter your habit name ..." />
          <img src={searchIcon} alt="" className="search-icon" />
        </div> */}

        <div className="menu-profpic-container">
          <img src={menuImage} alt="" className="nav-imgs" />
         
            <button onClick={logout} className="nav-btn-two">Log out</button>
          
          <img src={profPic} alt="" className="nav-imgs" />
        </div>
      </nav>
    </div>
  );
}
