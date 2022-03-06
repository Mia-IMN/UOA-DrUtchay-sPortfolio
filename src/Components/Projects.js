import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import { AOS } from "aos";

const Projects = () => {
  useEffect(() =>{
    Aos.init({duration: 1500});
  }, [])
  return (
    <div className="Projects" id="Projects">
      <div className="projects">
        <h1 id="Projects">Projects</h1>
        <div id="board" data-aos="fade-right">
          <div className="right">
            <h3>
              <b>Principal Surveyor</b>
            </h3>
            <p>Utchay Okorji Associates, Estate Surveyors and Valuers</p>
          </div>
          <div className="left"> March 2007 - Present </div>
        </div>
        <div id="board" className="board" data-aos="fade-left">
          <div className="right">
            <h3>
              <b>Lecturer, Department of Estate Management</b>
            </h3>
            <p>Rivers State University</p>
          </div>
          <div className="left" >November 2005</div>
        </div>
        <div id="board" data-aos="fade-right">
          <div className="right">
            <h3>
              <b>Estate Surveyor</b>
            </h3>
            <p>Ibimina Kakulu & Associates</p>
          </div>
          <div className="left">February 2005</div>
        </div>
        <div id="board" className="board" data-aos="fade-left">
          <div className="right">
            <h3>
              <b>National Youth Service Corps (NYSC)</b>
            </h3>
            <p>
              Chris Onjewu & Co. Estate Surveyors & Valuers <br /> Jimeta, Yola,
              Adamawa State
            </p>
          </div>
          <div className="left">February 2004</div>
        </div>
        <div id="board" data-aos="fade-right">
          <div className="right">
            <h3>
              <b>Estate Surveyor</b>
            </h3>
            <p>Ibimina Kakulu & Associates</p>
          </div>
          <div className="left">April 2002</div>
        </div>
        <div id="board" className="board" data-aos="fade-left">
          <div className="right">
            <h3>
              <b>Industrial Training</b>
            </h3>
            <p>Ibimina Kakulu & Associates</p>
          </div>
          <div className="left">July 2000</div>
        </div>
        <div id="board" data-aos="fade-up"> 
          <div className="right">
            <h3>
              <b>Industrial Training</b>
            </h3>
            <p>TREVI Foundations</p>
          </div>
          <div className="left">December 1999</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
