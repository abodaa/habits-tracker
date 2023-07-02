import { React, useState, useEffect } from "react";
import "../style/login.css";
import loginimage from "../images/habit.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      axios
        .post("http://localhost:3000/api/v1/auth/register", {
          username:username,
          email:email,
          password:password
        })
        .then((res) => console.log(res.data));
    } else {
      alert(`Please provide all info`);
    }
  };

  return (
    <div className="login-page-container">
      <img src={loginimage} alt="" className="login-page-img" />
      <div className="form-container">
        {/* ************************* */}

        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            {" "}
            <h2>Welcome to LIMAD | ልማድ </h2>
            <p>Start doing it every day!</p>
          </div>

          {/* Username */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            required
            placeholder="Enter your username. e.g. Abraham"
          />

          {/* email */}
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Enter your email"
          />
          {/* password */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            required
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="login-btn"
            onClick={(e) => handleSubmit(e)}
          >
            Sign up
          </button>
        </form>
        {register && <div>Registered</div>}

        {/* ************************* */}

        <div className="login-page-footer">
          <p>
            Already have LIMAD | ልማድ account?
            <Link
              to="/Login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className="login-page-footer-login-btn"> Log in.</p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
