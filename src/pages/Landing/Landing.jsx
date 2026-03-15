import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Challenges from './Challenges';
import Features from './Features';
import Architecture from './Architecture';
import Stats from './Stats';
import Conclusion from './Conclusion';
import FAQ from './FAQ';
import Footer from './Footer';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <Navbar />
      <main>
        <Hero />
        <Challenges />
        <Features />
        <Architecture />
        <Stats />
        <Conclusion />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
