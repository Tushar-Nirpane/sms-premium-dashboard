import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Landing.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How secure is student data in SMS?",
      a: "We use AES-256 encryption at rest and TLS 1.3 for data in transit. Your records are protected by industry-leading security protocols."
    },
    {
      q: "Can this handle multi-campus institutions?",
      a: "Yes, SMS is designed with a multi-tenant architecture that allows for centralized management of multiple branches or campuses."
    },
    {
      q: "Is there a mobile app for teachers and students?",
      a: "Our frontend is a Progressive Web App (PWA), meaning it works flawlessly on any mobile device without needing a separate download."
    },
    {
      q: "Does it integrate with existing LMS platforms?",
      a: "Absolutely. We provide a robust API documentation for seamless integration with platforms like Moodle, Canvas, and Blackboard."
    }
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="section-header">
        <h2 className="section-title">Common Questions</h2>
        <p className="section-subtitle">Everything you need to know about getting started.</p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className={`faq-item card ${openIndex === i ? 'open' : ''} hover-3d`}
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
          >
            <div className="faq-question">
              <h3>{faq.q}</h3>
              {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {openIndex === i && (
              <div className="faq-answer animate-entrance">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
