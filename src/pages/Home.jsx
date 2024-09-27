// src/pages/Home.jsx
import React from 'react';
//import Header from '../components/Header';
//import Carousel from '../components/Carousel';
import FeaturesSection from '../components/FeaturesSection';
import ServicesCarousel from '../components/ServicesCarousel';
import NextSection from '../components/NextSection';
import OverlaySection from '../components/OverlaySection';
import NewsAlerts from '../components/NewsAlerts';
import Hero from '../components/Hero';


const Home = () => {
  return (
    <div>
      
      <Hero />
      <FeaturesSection />
      <ServicesCarousel />
      <NextSection />
      <OverlaySection />
      <NewsAlerts />
      

      {/* Additional sections will go here */}
    </div>
  );
};

export default Home;
