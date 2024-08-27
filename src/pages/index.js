// pages/index.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Card from "react-bootstrap/Card";

import image1 from "../assets/index-img.jpg";
import simage1 from "../assets/s-image1.jpg";
import simage2 from "../assets/s-image2.jpg";
import simage3 from "../assets/s-image3.jpg";
import cardImage1 from "../assets/C-image1.jpg";
import cardImage2 from "../assets/C-image2.webp";
import cardImage3 from "../assets/C-image3.jpg";

const Home = () => {


  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="your-page-container">
      <div className="text-and-image-container">
        <div className="text-container">
          <h2>Create a resume to land your next job</h2>
          <p>
            We have developed a resume builder based on feedback from thousands
            of users, recruiter expertise, stellar template design and the best
            hiring practices. The goal is simple: help you land that dream job
            interview! Get an advantage in the modern professional environment.
          </p>
        </div>
        <div className="image-container">
          <img src={image1} alt="Your Image" />
        </div>
      </div>

      <div className="carousel-container">
        <Slider {...carouselSettings}>
          <div>
            <img
              src={simage1}
              className="Carousel-image"
              alt="Carousel Image 1"
            />
          </div>
          <div>
            <img
              src={simage2}
              className="Carousel-image"
              alt="Carousel Image 2"
            />
          </div>
          <div>
            <img
              src={simage3}
              className="Carousel-image"
              alt="Carousel Image 3"
            />
          </div>
        </Slider>
      </div>
      <br></br>

      <div className="images-and-cards-container">
        <div className="image">
          <h2>Powerful and easy-to-use</h2>
          <p>
            Created to be suitable for all levels of job seekers. Our host of
            powerful features ranges from an excellent spell-checker, to job
            tracking, multi-format export, auto-generated summaries and more.
          </p>
        </div>
        <div className="image">
          <h2>Customization made simple</h2>
          <p>
            Fine-tune your resume for a specific job with ease. We help you turn
            a generic document into a cutting-edge instrument that wins
            interviews. Transform universal resumes into perfect sales pitches
            with a few key-strokes.
          </p>
        </div>
        <div className="image">
          <h2>Templates designed by experts</h2>
          <p>
            Our designed templates and examples are reviewed by recruiters. This
            gives you a powerful boost in resume creation, straight from the
            other side of the job market - the people responsible for hiring and
            candidate evaluation.
          </p>
        </div>
      </div>
      <div className="images-and-cards-container">
        <div>
          <Card style={{ width: "18rem" }} className="Cards">
            <Card.Img variant="top" src={cardImage1} />
            <Card.Body>
              <Card.Title>Best Resume</Card.Title>
              <Card.Text>
                Our online resume builder offers a quick and easy way to create
                your professional resume from over 30 design templates. Create a
                resume using our AI-powered online resume wizard, plus take
                advantage of expert suggestions and customizable modern and
                professional resume templates
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }} className="Cards">
            <Card.Img variant="top" src={cardImage2} />
            <Card.Body>
              <Card.Title>Professional Templates</Card.Title>
              <Card.Text>
                Choose from over 30 applicant tracking systems (ATS)-friendly
                modern and professional templates.Use AI-enabled resume
                suggestions in the Resume Builder app to write a keyword-rich
                resume.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }} className="Cards">
            <Card.Img variant="top" src={cardImage3} />
            <Card.Body>
              <Card.Title>Customize fonts and colors</Card.Title>
              <Card.Text>
              Select custom fonts and colors on any resume template.Get help every step of the way as you build your resume with expert tips and suggested phrases.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/* Additional cards or images go here */}
      </div>
    </div>
  );
};

export default Home;
