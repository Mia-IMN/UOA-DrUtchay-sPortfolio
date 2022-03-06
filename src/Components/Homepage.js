import React, { useEffect } from "react";
import Aos from "aos";
import DrUtchayImg from "../Images/Dr-Utchay.png";
import Signature from "../Images/Paraf.png";

const Homepage = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="Homepage">
      <div className="homepage">
        <div className="scroll" data-aos="fade-up">
          <div className="p">
            <p> Scroll for more content </p>
            <span className="one-1">{'>'}</span>
            <span className="two-2">{'>'}</span>
            <span className="three-3">{'>'}</span>
            <span className="four-4">{'>'}</span>
            {/* <img src={Scroll} alt="" /> */}
          </div>
        </div>
        <div className="text" data-aos="fade-right">
          <p className="Hello">Hello, I'm Dr. Utchay Okorji</p>
          <h3>
            Estate Surveyor <br /> <span> & </span> Valuer
          </h3>
          <p>FNIVS, RSV</p>
          <p>Principal Partner, Utchay Okorji Associates (UOA)</p>
          <div className="links">
            <a href="#Competence"> <button>Competence</button></a>
            <a href="#" className="second">
              <button>UOA</button>
            </a>
          </div>
        </div>
        <div className="images">
          <img src={DrUtchayImg} className="DrUtchay" data-aos="fade-left" />
          <img src={Signature} className="signature" data-aos="fade-left" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
