// pages/about.js

import React from "react";
import "./about.css";
import Carousel from 'react-bootstrap/Carousel';
import Aimg from "../assets/About-image.jpeg"

const About = () => {
 
  return (
    <div>
      <div className="about-us-container">
        <div className="left-content">
          <h1 className="h1">About </h1>
          <p className="para">
            Welcome to Resume Builder – the hub for crafting compelling resumes
            that open doors to opportunities. Our team is comprised of dedicated
            professionals with years of experience in both technology and career
            development. We understand the importance of a standout resume, and
            that's why we've built a user-friendly platform with your success in
            mind. If you have any queries or need assistance, our responsive
            support team is here to help. We value your experience with our
            platform, and your feedback is crucial in refining our services.
            Whether you have questions about the resume-building process,
            encounter technical issues, or simply want to share your success
            story, we're eager to hear from you. Contact us via{" "}
            <span className="span">SSUET@gmail.com</span> or use the convenient
            form below. Your journey to a standout resume starts here, and we're
            here every step of the way to ensure your career aspirations become
            a reality.
          </p>
        </div>
        <div className="right-content">
          {/* You can replace the image source with your actual image file */}
          <img src={Aimg} className="Aimage" alt="About Us" />
        </div>
      </div>
      <div className="testimonials-container">
        <h2>What Users Say About Resume Builder</h2>
        
      </div>
    </div>
  );
};

export default About;
