import "../style/navbar.scss";
import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import searchIcon from "../images/search.png";
import menuImage from "../images/menu.png";
import profPic from "../images/user.png";
import Switch from "../components/Switch";
import { BsFilterLeft } from "react-icons/bs";
import { VscAdd } from "react-icons/vsc";
import { BiDownArrow } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { TfiHelpAlt } from "react-icons/tfi";
import { AiOutlineLogout } from "react-icons/ai";



import { Link } from "react-router-dom";

import FormDialog from "../components/Addhabitmodal";
import Mobilemenu from "../components/Mobilemenu";

import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
let token = cookies.get("TOKEN");

export default function Navbar() {
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/habit", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setName(res.data.name);
        console.log(res.data.name);
      });
  }, []);

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
          <Link to="/">
            <img src={logo} alt="" className="logo" />
          </Link>
          <TfiHelpAlt />
        </div>

        <div className="filter-add-habit-container">
          <Link to="./Dashboard" style={{ textDecoration: "none" }}>
            <button className="add-habit-filter">
              <RxDashboard />
              Dashboard
            </button>
          </Link>
          <FormDialog className="add-habit-icon" />
          {/* <button className="add-habit-filter">
            <BsFilterLeft />
            Filter
            <BiDownArrow />
          </button> */}
        </div>

        <div className="menu-profpic-container">
          {/* <img src={menuImage} alt="" className="nav-imgs" /> */}
          <div className="mobile-menu">
            <Link to="./Dashboard">
              <button className="add-habit-filter-mobile">
                <RxDashboard
                  className="mobile-menu"
                  style={{ color: "black" }}
                />
              </button>
            </Link>
            <Mobilemenu className="mobile-add-habit-icon" />
          </div>
          <button onClick={logout} className="nav-btn-two">
            <AiOutlineLogout style={{fontSize:"1rem"}}/>
          </button>

          <img src={profPic} alt="" className="nav-imgs" />
          <p className="username">{`Hi, ${name}`}</p>
          {/* <Switch className="switch" /> */}
        </div>
        <div></div>
      </nav>
    </div>
  );
}
