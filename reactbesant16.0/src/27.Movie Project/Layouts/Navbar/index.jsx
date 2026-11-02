
import React from "react";
import {Link} from 'react-router'
import "./index.css";

const Navbar = ({search,setSearch}) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>🎬</span> Movie<span className="highlight">Zone</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Movies</Link></li>
        <li><Link to="/tvseries">TV Series</Link></li>
        <li><Link to="#trending">Trending</Link></li>
      </ul>

      <div className="nav-actions">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
