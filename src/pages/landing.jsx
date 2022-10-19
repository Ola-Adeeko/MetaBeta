import React from "react";
import { useEffect } from "react";
import Hero from "../component/hero/hero";
import Platform from "../component/platform/platform";

const Landing = () => {
  useEffect(() => {
    document.title = "Meta | Home";
  }, []);
  return (
    <div>
      <Hero />
      <Platform />
    </div>
  );
};

export default Landing;
