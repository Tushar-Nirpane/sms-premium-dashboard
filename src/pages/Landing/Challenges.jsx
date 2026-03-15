import React from 'react';
import { FileX, AlertTriangle, Clock } from 'lucide-react';
import './Landing.css';

const Challenges = () => {
  return (
    <section id="features" className="challenges">
      <div className="section-header">
        <h2 className="section-title">Challenges of Traditional Systems</h2>
        <p className="section-subtitle">Problems that SMS is designed to solve.</p>
      </div>
      
      <div className="challenges-grid">
        <div className="card challenge-card hover-3d animate-entrance" style={{ animationDelay: '0.1s' }}>
          <div className="icon-wrapper error">
            <FileX size={28} />
          </div>
          <h3>Manual Record Keeping</h3>
          <p>Paper-based systems are prone to loss, damage, and disorganization.</p>
        </div>
        
        <div className="card challenge-card hover-3d animate-entrance" style={{ animationDelay: '0.2s' }}>
          <div className="icon-wrapper alert">
            <AlertTriangle size={28} />
          </div>
          <h3>Data Errors</h3>
          <p>Manual data entry leads to frequent mistakes in grades and attendance.</p>
        </div>
        
        <div className="card challenge-card hover-3d animate-entrance" style={{ animationDelay: '0.3s' }}>
          <div className="icon-wrapper warning">
            <Clock size={28} />
          </div>
          <h3>Time-Consuming</h3>
          <p>Calculations, report generation, and data retrieval waste valuable hours.</p>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
