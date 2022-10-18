import React, { useRef } from "react";
import { useNavigate } from "react-router";
import { FaTimes, FaBars } from "react-icons/fa";
import "./navbar.scss";

const Navbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="nav-bar">
      <div className="nav-box">
        <div className="nav-item">
          <span onClick={() => navigate("/")}>Home</span>
        </div>
        {/* <div className="nav-item">
          <span>About</span>
        </div> */}
        <div className="logo">
          <span>Meta.ID</span>
        </div>
        <div
          className={
            window.location.pathname === "/features" ? "active" : "nav-item"
          }
          onClick={() => navigate("/features")}
        >
          <span>Features</span>
        </div>
        {/* <div className="nav-item">
          <span>Contact</span>
        </div> */}
      </div>
      <div className="nav-box-2">
        <div className="logo">
          <span>Meta.ID</span>
        </div>
        <div className="nav-list" ref={navRef}>
          <div className="nav-item">
            <span onClick={() => navigate("/")}>Home</span>
          </div>
          {/* <div className="nav-item">
            <span>About</span>
          </div> */}
          <div
            className={
              window.location.pathname === "/features" ? "active" : "nav-item"
            }
            onClick={() => navigate("/features")}
          >
            <span>Features</span>
          </div>
          {/* <div className="nav-item">
            <span>Contact</span>
          </div> */}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
