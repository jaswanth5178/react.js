import React from "react";

function Projects() {
  return (
    <>
      <section className="projects section" id="projects">
        <div className="section-title">
          <p>My Recent Work</p>
          <h2>
            My <span>Projects</span>
          </h2>
        </div>

        <div className="project-container">
          {/* Project 01 */}
          <div className="project-card">
            <div className="project-number">01</div>
            <h3>Hospital Management System</h3>
            <p>
              A Java and MySQL application for managing patients, doctors, appointments, bills and medical reports through role-based dashboards.
            </p>
            <div className="project-tech">
              <span>Java</span>
              <span>JDBC</span>
              <span>MySQL</span>
              <span>HTML/CSS/JS</span>
            </div>
            <button>View Project</button>
          </div>

          {/* Project 02 */}
          <div className="project-card">
            <div className="project-number">02</div>
            <h3>Personal Portfolio</h3>
            <p>
              A modern responsive portfolio created to present my profile, technical skills, education, projects and contact information.
            </p>
            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Responsive</span>
            </div>
            <button>View Project</button>
          </div>

          {/* Project 03 */}
          <div className="project-card">
            <div className="project-number">03</div>
            <h3>Insider Threat Detection System</h3>
            <p>
              A security-focused web application that analyses activity patterns and supports the detection of suspicious internal behaviour.
            </p>
            <div className="project-tech">
              <span>Python</span>
              <span>FastAPI</span>
              <span>React</span>
              <span>MySQL</span>
            </div>
            <button>View Project</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
