import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Demo from '../components/Demo/Demo';
import About from '../components/About/About';
import Pricing from '../components/Pricing/Pricing';
import Contact from '../components/Contact/Contact';

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Features />
      <Demo />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
};

export default HomePage;