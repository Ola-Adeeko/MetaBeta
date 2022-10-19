import React, { useEffect } from "react";
import Intro from "../component/intro/intro";
import Feature from "../component/feature/feature";

const Features = () => {
  useEffect(() => {
    document.title = "Meta | Feature";
  }, []);
  return (
    <div>
      <Intro />
      <Feature />
    </div>
  );
};

export default Features;
