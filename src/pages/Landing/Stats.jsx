import React from 'react';
import './Landing.css';

const Stats = () => {
  const stats = [
    { label: "Active Students", value: "50,000+", sub: "Across 120 institutions" },
    { label: "Graduation Rate", value: "98.5%", sub: "Improving every year" },
    { label: "System Uptime", value: "99.9%", sub: "Enterprise reliability" },
    { label: "User Rating", value: "4.9/5", sub: "Based on 2k+ reviews" }
  ];

  return (
    <section className="stats-section animate-entrance">
      <div className="stats-container">
        {stats.map((s, i) => (
          <div key={i} className="stat-item hover-3d">
            <h2 className="stat-value">{s.value}</h2>
            <div className="stat-label">{s.label}</div>
            <p className="stat-sub">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
