import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <GraduationCap className="logo-icon" size={24} />
          <span className="logo-text">SMS</span>
        </Link>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#architecture">Architecture</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#tech-stack">Tech Stack</a></li>
        </ul>
        <div className="navbar-actions">
          <Link to="/login" className="btn-primary">Login Demo</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
