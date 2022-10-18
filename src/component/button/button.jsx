import React from "react";
import "./button.scss";

const CustomButton = ({ children, icon, inverted, ...otherProps }) => {
  return (
    <button className={inverted ? "inverted" : "button"} {...otherProps}>
      {children}
      {icon}
    </button>
  );
};

export default CustomButton;
