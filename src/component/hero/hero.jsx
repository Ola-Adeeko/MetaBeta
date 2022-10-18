import React from "react";
import "./hero.scss";
import HeroIcon from "../../assets/hero.png";
import QuoteIcon from "../../assets/quote.png";
import { BsPlayCircle } from "react-icons/bs";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-sec">
      <div className="hero-box" id="hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hd-head">
              <span>One Account.</span>
              <span>Unlimited Access</span>
            </div>
            <div className="hd-body">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </span>
              <span className="hd-mini">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </span>
            </div>
            <div className="hd-btn-link">
              <div className="hd-btn" onClick={() => navigate("/register")}>
                <span>Get Started</span>
              </div>
              <div className="hd-btn">
                <span>Watch Tutorial</span>
                <BsPlayCircle />
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hd-body">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </span>
              <div className="hd-quote">
                <img src={QuoteIcon} alt="icon" />
              </div>
            </div>
            <div className="hero-icon-right">
              <img src={HeroIcon} alt="icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-blur"></div>
      <div className="hero-icon">
        <img src={HeroIcon} alt="icon" />
      </div>
    </div>
  );
};

export default Hero;
