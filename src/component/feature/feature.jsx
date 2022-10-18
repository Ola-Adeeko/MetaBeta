import React from "react";
import "./feature.scss";
import StandingIcon from "../../assets/saly-2.png";
import Dot from "../../assets/dot-feat.png";
import CustomButton from "../button/button";
import FloatingCard from "../container/floatingCard/floatingCard";
import { BsArrowRight } from "react-icons/bs";

const Feature = () => {
  return (
    <div className="feature-page">
      <section className="customers">
        <div className="dot">
          <img src={Dot} alt="icon" />
        </div>
        <div className="c-left">
          <div className="cl-con">
            <span>Our Customers love </span>
            <span>what we do</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <CustomButton icon={<BsArrowRight />}>
              Read Success Stories
            </CustomButton>
          </div>
        </div>
        <div className="c-right">
          <div className="floating">
            <FloatingCard
              name="John Bosco"
              picture="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <FloatingCard
              name="Margret Lynne"
              picture="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </section>
      <section className="connected">
        <div className="connected-left">
          <div className="connected-img">
            <img src={StandingIcon} alt="icon" />
          </div>
        </div>
        <div className="connected-right">
          <span>Stay Connected to</span>
          <span>All your favorite</span>
          <span>streaming services</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="btn">
            <input placeholder="Enter your email" />
            <CustomButton>Get Started</CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
