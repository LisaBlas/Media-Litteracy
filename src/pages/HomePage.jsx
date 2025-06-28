import React from 'react';
import Hero from '../components/Hero';
import ToolsOverview from '../components/ToolsOverview';
import HowItWorks from '../components/HowItWorks';
import CourseSpotlight from '../components/CourseSpotlight';
import ResourcesCommunity from '../components/ResourcesCommunity';
import Testimonials from '../components/Testimonials';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-editorial-cream">
      <Hero />
      <ToolsOverview />
      <HowItWorks />
      <CourseSpotlight />
      <ResourcesCommunity />
      <Testimonials />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default HomePage;
