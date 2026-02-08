import React, { useEffect } from "react";
import "./login.scss";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    e.preventDefault();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // console.log(e.target.value);
      if (e.key === "Enter") {
       if(userName!==''  && password!==''){
        navigate('/home')
       }
       else{
        alert('Please username and password')
       }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
   return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  },[userName,password,navigate]);

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
