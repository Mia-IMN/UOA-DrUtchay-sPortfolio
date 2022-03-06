import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slide() {
  return (
    <Carousel controls='true' variant='dark' pause='hover' wrap='true' keyboard='true'>
  <Carousel.Item interval={5000} className='item'>
    <h4>Personal Attributes</h4>
    <ol>
      <li>Proactive and innovative</li>
      <li>Sound analytical mind</li>
      <li>Creativity, originality and consistency</li>
      <li>Excellent interpersonal communication skills</li>
      <li>Resilent and result oriented</li>
      <li>Self-motivated and admirable team spirit</li>
      <li>Knowledgeable in Information Technology (IT)</li>
    </ol>
  </Carousel.Item>
  <Carousel.Item interval={5000} className='item'>
    <div className="details">
      <h4>Education</h4>
      <ol>
        <li><h4>Post Graduate Education</h4>
        <p><span>2005: </span>University of Reading, UkMSc Real Estate</p></li>
        <li><h4>Tertiary Education</h4>
        <p><span>2002: </span>Rivers State University <br /> BTech Estate Management (Second Class Upper)</p></li>
        <li><h4>Secondary Education</h4>
        <p><span>1988-1994: </span> International Secondary School (RSU) Port Harcourt</p>
        <p><span>1995: </span> Senior Secondary Certificate (WAEC)</p></li>
      </ol>
    </div>
  </Carousel.Item>
  {/* <Carousel.Item interval={5000} className='item'>
   <h4>Professional Membership and Certification</h4>
   <ol>
     <li>Member - Royal Institution of Chartered Surveyors</li>
     <li>Fellow (FNIVS) - The Nigerian Institution of Estate Surveyors and Valuers</li>
     <li>Registered Surveyor and Valuer (RSV) - ESVARBON</li>
     <li>Member - Financial Reporting Council of Nigeria</li>
   </ol>
  </Carousel.Item> */}
</Carousel>
  );
}
