import React from 'react';
import { Database, Server, Smartphone, Layout } from 'lucide-react';
import './Landing.css';

const Architecture = () => {
  const layers = [
    { name: "Frontend Interior", desc: "React-based interactive dashboard with real-time updates.", icon: <Layout size={24} /> },
    { name: "Global Edge API", desc: "High-performance Node.js backend serving secure REST endpoints.", icon: <Server size={24} /> },
    { name: "Database Cluster", desc: "Distributed SQL storage for consistent and reliable record keeping.", icon: <Database size={24} /> },
    { name: "Mobile Ready", desc: "Native-feel experience across all iOS and Android devices.", icon: <Smartphone size={24} /> }
  ];

  return (
    <section id="architecture" className="architecture-section preserve-3d">
      <div className="section-header">
        <h2 className="section-title">Modern Architecture</h2>
        <p className="section-subtitle">Scalable, secure, and lightning-fast infrastructure.</p>
      </div>

      <div className="arch-container">
        <div className="arch-visual animate-entrance">
          {layers.map((l, i) => (
            <div key={i} className="arch-node hover-3d">
              <div className="node-icon">{l.icon}</div>
              <div className="node-info">
                <h4>{l.name}</h4>
                <p>{l.desc}</p>
              </div>
              {i < layers.length - 1 && <div className="node-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
