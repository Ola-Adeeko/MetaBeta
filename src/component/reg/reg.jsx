import React from "react";
import "./reg.scss";
import RegIcon from "../../assets/saly-4.png";
import userIcon from "../../assets/user.png";
import IdIcon from "../../assets/id.png";
import PassIcon from "../../assets/password.png";
import CustomButton from "../button/button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Reg = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Welcome ${user}`);
    setUser("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="reg-page">
      <div className="reg-box">
        <div className="reg-left">
          <div className="reg-img">
            <img src={RegIcon} alt="icon" />
          </div>
        </div>
        <div className="reg-right">
          <form onSubmit={handleSubmit}>
            <div className="form-content">
              <div className="f-cont">
                <div className="f-icon">
                  <img src={IdIcon} alt="icon" />
                </div>
                <span className="f-hd">Create Account</span>
                <span className="f-sub">
                  Please fill out your details to continue.
                </span>
                <div className="f-input">
                  <img src={userIcon} alt="icon" />
                  <input
                    placeholder="User ID"
                    value={user}
                    type="text"
                    onChange={(e) => setUser(e.target.value)}
                    required
                  />
                </div>
                <div className="f-input">
                  <img src={PassIcon} alt="icon" />
                  <input
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="f-input">
                  <img src={PassIcon} alt="icon" />
                  <input
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="btn">
                  <CustomButton type="submit">Next</CustomButton>
                  <button className="g-button" type="submit">
                    Sign Up with <FcGoogle /> Google
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reg;
