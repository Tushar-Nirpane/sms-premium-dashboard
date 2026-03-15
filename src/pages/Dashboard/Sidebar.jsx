import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  GraduationCap, 
  Home, 
  Users, 
  BookOpen, 
  CalendarDays, 
  FileText, 
  Bell, 
  Settings, 
  ArrowLeft, 
  LogOut 
} from 'lucide-react';
import './Dashboard.css';

const Sidebar = () => {
  const mainLinks = [
    { name: 'Dashboard', icon: <Home size={20} />, path: '/dashboard' },
    { name: 'Students', icon: <Users size={20} />, path: '/dashboard/students' },
    { name: 'Courses', icon: <BookOpen size={20} />, path: '/dashboard/courses' },
    { name: 'Attendance', icon: <CalendarDays size={20} />, path: '/dashboard/attendance' },
    { name: 'Results', icon: <FileText size={20} />, path: '/dashboard/results' },
    { name: 'Notifications', icon: <Bell size={20} />, path: '/dashboard/notifications' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/dashboard/settings' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <GraduationCap className="logo-icon" size={24} />
        <h2>SMS Student</h2>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {mainLinks.map(link => (
            <li key={link.name}>
              {/* For demo, just keeping dashboard active styling */}
              <NavLink 
                to={link.path} 
                end={link.path === '/dashboard'}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <NavLink to="/" className="nav-link">
          <ArrowLeft size={20} />
          <span>Back to Site</span>
        </NavLink>
        <NavLink to="/" className="nav-link logout-link">
          <LogOut size={20} />
          <span>Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
