import React from "react";
import "../style/login.css";
import loginimage from "../images/habit.jpg";

export default function login() {
  return (
    <div className="login-page-container">
      <img src={loginimage} alt="" className="login-page-img" />
      <form action="">
        <div>
          {" "}
          <h2>Welcome to LIMAD | ልማድ </h2>
          <p>Start doing it every day!</p>
        </div>

        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter your email" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Enter your password" />
        <div className="login-forgetpassword-btn">
          <button type="submit" className="login-btn">
            Login
          </button>
          <p>Forgot password?</p>
        </div>
        <div className="login-page-footer">
          <p>
            Don’t have a LIMAD | ልማድ account? <a href=""> Sign up.</a>
          </p>
        </div>
      </form>
    </div>
  );
}
