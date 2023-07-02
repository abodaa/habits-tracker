import React from "react";
import "../style/login.css";
import loginimage from "../images/habit.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-page-container">
      <img src={loginimage} alt="" className="login-page-img" />
      <div className="form-container">
        {/* ************************* */}

        <form action="">
          <div>
            {" "}
            <h2>Welcome to LIMAD | ልማድ </h2>
            <p>Start doing it every day!</p>
          </div>

          <label htmlFor="">Email</label>
          <input type="text" required placeholder="Enter your email" />
          <label htmlFor="">Password</label>
          <input type="password" required placeholder="Enter your password" />
          <div className="login-forgetpassword-btn">
            <button type="submit" className="login-btn">
              Login
            </button>
            <p>Forgot password?</p>
          </div>
        </form>

        {/* ************************* */}

        <div className="login-page-footer">
          <p>
            Don’t have a LIMAD | ልማድ account?
            <Link
              to="/Signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className="login-page-footer-login-btn"> Sign up.</p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
