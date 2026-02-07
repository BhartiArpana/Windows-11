import React from "react";
import "./login.scss";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChnage = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setPassword("");
    setUserName("");
  };
  return (
    <div className="login">
      <img src="/images/lockImage.jpg" alt="" />
      <div className="loginElement">
        <div className="loginCoverPage">
          <div className="loginProfileIcon">
            <FaUserCircle className="profileIcon" />
          </div>
          <form>
            <input
              type="text"
              value={userName}
              readOnly
              onFocus={(e) => e.target.removeAttribute("readonly")}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter Username "
              name="username"
              autoComplete="off"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="loginPassword"
              name="username"
              autoComplete="oFF"
              placeholder="PIN"
              required
            />

            <div className="forgotPassword">Forgot PIN</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
