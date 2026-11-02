import React from "react";

function About() {
  return (
    <>
      <section className="about section" id="about">
        <div className="section-title">
          <p>Get To Know Me</p>
          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-card">
            <h3>
              Who Am I?
            </h3>
            <p>
              I am Pattupogula Jaswanth, a Computer Science and Engineering student and Java Full Stack Developer.
            </p>
            <p>
              I enjoy learning new technologies, developing practical applications and solving real-world problems through software solutions.
            </p>
            <a
              href="#contact"
              className="btn primary-btn"
            >
              Let's Talk
            </a>
          </div>

          <div className="about-details">
            <div className="detail-box">
              <h3>Education</h3>
              <p>B.Tech – CSE</p>
            </div>
            <div className="detail-box">
              <h3>Role</h3>
              <p>Java Full Stack Developer</p>
            </div>
            <div className="detail-box">
              <h3>Experience</h3>
              <p>3+ Projects Built</p>
            </div>
            <div className="detail-box">
              <h3>Location</h3>
              <p>Andhra Pradesh, India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
