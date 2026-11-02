import React, { useState } from "react";

import Navbar from "./4.Portfolio/Navbar";
import Home from "./4.Portfolio/Home";
import About from "./4.Portfolio/About";
import Skills from "./4.Portfolio/Skills";
import Projects from "./4.Portfolio/Projects";
import Contact from "./4.Portfolio/Contact";
import Footer from "./4.Portfolio/Footer";

import "./4.Portfolio/main.scss";

function App() {

  // Start with DARK mode
  const [darkMode, setDarkMode] = useState(true);

  // Change dark <-> light
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>

      <Navbar />

      <Home
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;