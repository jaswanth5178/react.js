import React from "react";

function Navbar() {

  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header className="navbar">

        {/* Logo */}
        <div
          className="logo"
          onClick={() => handleClick("home")}
        >
          Avnish
        </div>


        {/* Navigation */}
        <nav>

          <button onClick={() => handleClick("home")}>
            Home
          </button>

          <button onClick={() => handleClick("about")}>
            About
          </button>

          <button onClick={() => handleClick("skills")}>
            Skills
          </button>

          <button onClick={() => handleClick("projects")}>
            Projects
          </button>

          <button onClick={() => handleClick("contact")}>
            Contact
          </button>

        </nav>

      </header>
    </>
  );
}

export default Navbar;