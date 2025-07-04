import React from 'react';
import Hero from '../components/Hero';
import FallacyDetector from '../components/FallacyDetector';
import CourseSpotlight from '../components/CourseSpotlight';
import ResourcesCommunity from '../components/ResourcesCommunity';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-editorial-cream">
      <Hero />
      <FallacyDetector />
      <CourseSpotlight />
      <ResourcesCommunity />
      <Footer />
    </div>
  );
};

export default HomePage;
