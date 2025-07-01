import React from 'react';
import Hero from '../components/Hero';
import FallacyDetector from '../components/FallacyDetector';
import CourseSpotlight from '../components/CourseSpotlight';
import ResourcesCommunity from '../components/ResourcesCommunity';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-editorial-cream">
      <Hero />
      <FallacyDetector />
      <CourseSpotlight />
      <ResourcesCommunity />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default HomePage;
