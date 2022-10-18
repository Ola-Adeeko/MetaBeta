import React from "react";
import "./container.scss";

const Container = ({ icon, txt1, txt2 }) => {
  return (
    <div className="container">
      <img src={icon} alt="icon" />
      <span className="txt1">{txt1}</span>
      <span className="txt2">{txt2}</span>
    </div>
  );
};

export default Container;
