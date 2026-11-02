import React from "react";

function Home({ darkMode, toggleTheme }) {
  return (
    <section className="home" id="home">
      {/* LEFT SIDE */}
      <div className="home-content">
        <p className="small-text">
          Hello, I'm
        </p>
        <h1>
          Pattupogula <span>Jaswanth</span>
        </h1>
        <h2>
          Java Full Stack Developer
        </h2>
        <p className="home-description">
          I build frontend interfaces, Java backend applications, REST APIs and database-driven systems using Java, HTML, CSS, JavaScript, JDBC and MySQL.
        </p>
        <div className="home-buttons">
          <a
            href="#projects"
            className="btn primary-btn"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn secondary-btn"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT SIDE - PJ LOGO */}
      <div className="home-image">
        <button
          className="profile-circle"
          onClick={toggleTheme}
          title="Change Theme"
        >
          <span className="profile-text">
            PJ
          </span>
        </button>
      </div>
    </section>
  );
}

export default Home;
