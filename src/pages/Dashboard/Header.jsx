import React from 'react';
import { Bell } from 'lucide-react';
import './Dashboard.css';

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="header-titles">
        <h1>Dashboard</h1>
        <p>Welcome back, TUSHAR NIRPANE</p>
      </div>
      
      <div className="header-actions">
        <span className="role-pill">Student</span>
        <button className="icon-btn">
          <Bell size={20} />
        </button>
        <div className="avatar">
          T
        </div>
      </div>
    </header>
  );
};

export default Header;
