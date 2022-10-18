import React from "react";
import "./floatingCard.scss";
import { ImQuotesLeft } from "react-icons/im";

function FloatingCard({ name, picture }) {
  return (
    <div className="floating-card">
      <div className="float-content">
        <figure>
          <ImQuotesLeft />
        </figure>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis nisi
          amet sapien.
        </p>
        <span>{name}</span>
      </div>
      <div className="float-img">
        <img src={picture} alt="icon" />
      </div>
    </div>
  );
}

export default FloatingCard;
