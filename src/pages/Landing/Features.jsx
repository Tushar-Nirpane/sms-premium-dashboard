import React from 'react';
import { Shield, Zap, Globe, BarChart2, ShieldCheck, HelpCircle } from 'lucide-react';
import './Landing.css';

const Features = () => {
  const features = [
    {
      title: "Real-time Attendance",
      desc: "Instant tracking and reporting of student presence with automated parent notifications.",
      icon: <Zap size={28} className="text-teal" />
    },
    {
      title: "Automated Grading",
      desc: "Smart grade calculations based on customizable weightage for exams and assignments.",
      icon: <BarChart2 size={28} className="text-blue" />
    },
    {
      title: "Secure Data Storage",
      desc: "Enterprise-grade encryption for all student and faculty records with daily backups.",
      icon: <ShieldCheck size={28} className="text-teal" />
    },
    {
      title: "Global Accessibility",
      desc: "Multi-platform access for administrators, teachers, and students from anywhere in the world.",
      icon: <Globe size={28} className="text-blue" />
    }
  ];

  return (
    <section id="detailed-features" className="features-section preserve-3d">
      <div className="section-header">
        <h2 className="section-title">Comprehensive Management</h2>
        <p className="section-subtitle">Powerful tools designed for the modern educational ecosystem.</p>
      </div>
      
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="card feature-card hover-3d animate-entrance" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
