import React from "react";
import Slide from "./Slide";

const About = () => {
  return (
    <div className="About" id="Profile">
      <h1>Profile</h1>
      <div className="box box1"></div>
      <div className="box box2" data-aos="fade-left">
      <Slide />
      </div>
    </div>
  );
};

export default About;
