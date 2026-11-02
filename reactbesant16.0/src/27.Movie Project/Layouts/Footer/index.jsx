
import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo and Description */}
        <div className="footer-about">
          <h2>
            🎬 Movie<span>Zone</span>
          </h2>
          <p>
            Your ultimate destination for discovering movies,
            exploring TV series, and finding your next favorite story.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#movies">Movies</a>
          <a href="#series">TV Series</a>
          <a href="#trending">Trending</a>
        </div>

        {/* Support */}
        <div className="footer-links">
          <h3>Support</h3>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">FB</a>
            <a href="https://instagram.com" aria-label="Instagram">IG</a>
            <a href="https://youtube.com" aria-label="YouTube">YT</a>
            <a href="https://x.com" aria-label="X">X</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} MovieZone. All rights reserved.
        </p>
        <p>Made with ❤️ for movie lovers.</p>
      </div>
    </footer>
  );
};

export default Footer;
