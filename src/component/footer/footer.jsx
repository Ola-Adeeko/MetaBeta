import React from "react";
import "./footer.scss";
import Sally from "../../assets/sally.png";
import CustomButton from "../button/button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footer-left">
          <img src={Sally} alt="sally" />
        </div>
        <div className="footer-right">
          <div className="f-hd">
            <span>Want to keep</span>
            <span>up-to-date?</span>
          </div>
          <span className="f-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <form className="f-form">
            <input placeholder="Sign Up to our Newsletter" />

            <div className="f-btn">
              <CustomButton inverted>Register</CustomButton>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-down">
        <div className="f-down">
          <div className="f-logo">
            <span>Meta.ID</span>
          </div>
          <div className="f-info">
            <div className="f-info-item">
              <span>Company</span>
            </div>
            <div className="f-info-item">
              <span>Terms of Service</span>
            </div>
            <div className="f-info-item">
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
