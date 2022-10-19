import React, { useEffect } from "react";
import Intro from "../component/intro/intro";
import Reg from "../component/reg/reg";

const Register = () => {
  useEffect(() => {
    document.title = "Meta | Register";
  }, []);
  return (
    <div>
      <Intro />
      <Reg />
    </div>
  );
};

export default Register;
