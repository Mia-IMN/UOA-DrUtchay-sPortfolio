import React from "react";
import Image1 from "../Images/Group.png";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="navigation">
        <img src={Image1} alt="logo" />
        <ul>
          <a href="#">
            <li> Home </li>
          </a>
          <a href="#Profile">
            <li>Profile</li>
          </a>
          <a href="#Projects">
            <li>Projects</li>
          </a>
          <a href="#Contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
