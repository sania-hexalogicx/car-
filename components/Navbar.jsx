
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        AUTO<span>LUX</span>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#cars">Our Cars</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#cars" className="nav-btn">
        Explore Cars
      </a>
    </nav>
  );
}

export default Navbar;
