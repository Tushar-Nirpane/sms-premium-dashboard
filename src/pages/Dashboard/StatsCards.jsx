import React from 'react';
import { Users, BookOpen, CalendarDays, Award, TrendingUp } from 'lucide-react';
import './Dashboard.css';

const StatsCards = () => {
  const stats = [
    {
      title: "Total Students",
      value: "2,450",
      change: "+12%",
      icon: <Users size={20} className="text-blue" />,
      bgClass: "bg-blue-light"
    },
    {
      title: "Courses Active",
      value: "86",
      change: "+3",
      icon: <BookOpen size={20} className="text-blue" />,
      bgClass: "bg-blue-light"
    },
    {
      title: "Avg Attendance",
      value: "87%",
      change: "+2%",
      icon: <CalendarDays size={20} className="text-blue" />,
      bgClass: "bg-blue-light"
    },
    {
      title: "Pass Rate",
      value: "93%",
      change: "+5%",
      icon: <Award size={20} className="text-blue" />,
      bgClass: "bg-blue-light"
    }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="card stat-card hover-3d animate-entrance" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="stat-header">
            <div className={`icon-square ${stat.bgClass}`}>
              {stat.icon}
            </div>
            <div className="stat-change">
              <TrendingUp size={14} />
              <span>{stat.change}</span>
            </div>
          </div>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-title">{stat.title}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
