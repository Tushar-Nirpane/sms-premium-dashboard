import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Challenges from './Challenges';
import Conclusion from './Conclusion';
import Footer from './Footer';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <main>
        <Hero />
        <Challenges />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
