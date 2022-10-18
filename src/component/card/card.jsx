import React from "react";
import "./card.scss";
import CustomButton from "../button/button";
import { useNavigate } from "react-router";

const Card = ({ title, price, icon1, icon2, icon3, icon4 }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-hd">{title}</div>
      <div className="card-price">${price}</div>
      <span>Per Month</span>
      <div className="card-detail">
        <span>{icon1}</span>
        <span>Labore et dolore magna aliqua.</span>
      </div>
      <div className="card-detail">
        <span>{icon2}</span>
        <span>Labore et dolore magna aliqua.</span>
      </div>
      <div className="card-detail">
        <span>{icon3}</span>
        <span>Labore et dolore magna aliqua.</span>
      </div>
      <div className="card-detail">
        <span>{icon4}</span>
        <span>Labore et dolore magna aliqua.</span>
      </div>
      <div className="card-btn">
        <CustomButton onClick={() => navigate("/register")}>
          Get Started
        </CustomButton>
      </div>
    </div>
  );
};

export default Card;
