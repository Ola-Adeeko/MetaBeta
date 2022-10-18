import React from "react";
import "./intro.scss";
import SittingIcon from "../../assets/saly-3.png";
import CheckIcon from "../../assets/saly-1.png";

const Intro = () => {
  return (
    <div className="intro-section">
      <div className="intro-box">
        <div className="intro-content">
          <div className="intro-left">
            <div className="intro-img">
              <img src={SittingIcon} alt="icon" />
              <div className="intro-chk-img">
                <img src={CheckIcon} alt="icon" />
              </div>
            </div>

            <div className="intro-blur"></div>
          </div>
          <div className="intro-right">
            <span>Experience the best out of</span>
            <span>All Digital services</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
