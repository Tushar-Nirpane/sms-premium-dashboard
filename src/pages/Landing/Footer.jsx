import React from 'react';
import { GraduationCap } from 'lucide-react';
import './Landing.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <GraduationCap size={20} />
          <span>Student Management System</span>
        </div>
        <div className="footer-credits">
          © 2026 SMS — Engineering College Solution. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
