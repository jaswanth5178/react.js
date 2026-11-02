import React from "react";

function Skills() {
  return (
    <>
      <section className="skills section" id="skills">

        <div className="section-title">

          <p>What I Know</p>

          <h2>
            My <span>Skills</span>
          </h2>

        </div>


        <div className="skills-container">

          <div className="skill-card">
            <div className="skill-icon">H</div>
            <h3>HTML</h3>
            <p>Structure & Semantic Web</p>
          </div>


          <div className="skill-card">
            <div className="skill-icon">C</div>
            <h3>CSS</h3>
            <p>Design & Responsive Layout</p>
          </div>


          <div className="skill-card">
            <div className="skill-icon">JS</div>
            <h3>JavaScript</h3>
            <p>Dynamic Web Applications</p>
          </div>


          <div className="skill-card">
            <div className="skill-icon">R</div>
            <h3>React</h3>
            <p>Component Based Development</p>
          </div>


          <div className="skill-card">
            <div className="skill-icon">S</div>
            <h3>SASS</h3>
            <p>Advanced CSS Styling</p>
          </div>


          <div className="skill-card">
            <div className="skill-icon">G</div>
            <h3>Git</h3>
            <p>Version Control</p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Skills;