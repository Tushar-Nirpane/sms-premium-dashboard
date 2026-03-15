import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Conclusion = () => {
  const benefits = [
    "Operational Efficiency",
    "Data Transparency",
    "Better Decision Making",
    "Reduced Administrative Costs"
  ];

  return (
    <section id="benefits" className="conclusion">
      <div className="section-header">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-subtitle conclusion-desc">
          The Student Management System transforms how engineering colleges operate —
          replacing outdated manual processes with intelligent, automated solutions that benefit
          students, faculty, and administrators alike.
        </p>
      </div>
      
      <div className="benefits-pills">
        {benefits.map((benefit, index) => (
          <div key={index} className="pill">
            <CheckCircle2 size={16} className="pill-icon" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
      
      <div className="cta-container">
        <Link to="/login" className="btn-primary btn-large">
          Try the Demo <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default Conclusion;
