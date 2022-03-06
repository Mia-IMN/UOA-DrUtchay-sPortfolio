import React from "react";

const Skills = () => {
  return (
    <div className="Skills" id='Competence'>
      <h1>Competence</h1>
      <div className="cards">
        <div className="card" data-aos="flip-right">
          <h4>Professional Membership and Certification</h4>
          <ol>
            <li>Member - Royal Institution of Chartered Surveyors</li>
            <li>
              Fellow (FNIVS) - The Nigerian Institution of Estate Surveyors and
              Valuers
            </li>
            <li>Registered Surveyor and Valuer (RSV) - ESVARBON</li>
            <li>Member - Financial Reporting Council of Nigeria</li>
          </ol>
        </div>
        <div className="card" data-aos="flip-left">
          <h4>Awards</h4>
          <ol>
            <li>Best Professional Assessment prize winner of the Nigerian Institution of Estate Surveyors and Valuers <span> - 2006/2007</span></li>
            <li>Award for Professional Excellence - Rotract Club, D/Line, Port Harcourt, Rivers State, Nigeria</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Skills;
