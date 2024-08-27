// pages/blogs.js

import React from "react";
import "./YourStyles.css";
import bimg1 from "../assets/B-image.webp";
import bimg2 from "../assets/B-image1.jpg";
import bimg3 from "../assets/B-image2.png"

const Blogs = () => {
  return (
    <div className="container">
      {/* Section 1 */}
      <div className="section">
        <div className="content">
          <h1>PROFESSIONAL RESUME BUILDER</h1>
          <h2>Win your dream job</h2>
          <p>
            Before you ever step foot in a HR recruiter’s office to interview
            for that dream job, your resume is the first thing that crosses
            their desk. Because they can’t meet you firsthand to witness your
            witty personality, focused, driven work ethic, and ability to fit in
            well with any team, your resume has to do the talking for you.
            That’s why it’s essential that your resume properly expresses who
            you are, what you bring to the table, and why they should
            immediately pick up the phone and get you in the building. With
            ResumeCat you can be sure that your resume isn’t just being added to
            the pile; but that it stands out and makes recruiters take notice.
            {/* Add the remaining words */}
          </p>
        </div>
        <div className="image">
          <img src={bimg1} alt="Image 1" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="section">
        <div className="content sec2">
          <h2>Make the Most of Your First Impression</h2>
          <p>
            Six seconds. That’s the average time recruiters spend looking at
            your resume. Especially in those high-powered jobs where hundreds of
            people are applying. ResumeCat provides the support you need to
            create, format, and prepare your resume like a professional, so you
            can make every one of those seconds count. From white space to
            columns to easy-to-read titles and sections our tools can ensure you
            can fit your talents and aptitudes into each section with precision.
            More importantly, it’s fast, easy, and helps prepare you for your
            new career.
            {/* Add the remaining words */}
          </p>
        </div>
        <div className="image bimg2">
          <img src={bimg2} alt="Image 2" />
        </div>
      </div>
      <div className="section">
        <div className="content sec3">
          <h2>Marketing and Promotion</h2>
          <p>
            Blog content can be shared on social media platforms, increasing
            your website's reach and promoting your resume-building services.
            Shareable content can attract new visitors and potentially lead to
            more users utilizing your resume builder tools.. Users can leave
            comments, ask questions, and share their thoughts on your articles.
            This interaction can help you understand your users better and
            tailor your resume-building services to their needs.
          </p>
        </div>
        <div className="image bimg2">
          <img src={bimg3} alt="Image 2" />
        </div>
      </div>
      <div className="section">
        <div className="content sec2">
          <h2>Make the Most of Your First Impression</h2>
          <p>
            Six seconds. That’s the average time recruiters spend looking at
            your resume. Especially in those high-powered jobs where hundreds of
            people are applying. ResumeCat provides the support you need to
            create, format, and prepare your resume like a professional, so you
            can make every one of those seconds count. From white space to
            columns to easy-to-read titles and sections our tools can ensure you
            can fit your talents and aptitudes into each section with precision.
            More importantly, it’s fast, easy, and helps prepare you for your
            new career.
            {/* Add the remaining words */}
          </p>
        </div>
        <div className="image bimg2">
          <img src={bimg2} alt="Image 2" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
