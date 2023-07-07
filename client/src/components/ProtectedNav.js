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
import { Link } from "react-router-dom";


import FormDialog from "../components/Addhabitmodal";

import axios from "axios";
import Cookies from "universal-cookie";
import "../style/navbar.css";

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
          <img src={logo} alt="" className="logo" />
          <button className="nav-btn-one">Help me AI</button>
        </div>


        <div className="filter-add-habit-container">
        <Link to='./Dashboard' style={{textDecoration:"none"}}>
          <button className="add-habit-filter">
            <RxDashboard />
            Dashboard
          </button>
        </Link>
          <FormDialog />
          <button className="add-habit-filter">
            <BsFilterLeft />
            Filter
            <BiDownArrow />
          </button>
        </div>

        <div className="menu-profpic-container">
          <img src={menuImage} alt="" className="nav-imgs" />

          <button onClick={logout} className="nav-btn-two">
            Log out
          </button>

          <img src={profPic} alt="" className="nav-imgs" />
          <p>{`Hi, ${name}`}</p>
          <Switch />
        </div>
      </nav>
    </div>
  );
}
