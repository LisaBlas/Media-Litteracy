import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import FallacyDetector from '../components/FallacyDetector';
import CourseSpotlight from '../components/CourseSpotlight';
import ResourcesCommunity from '../components/ResourcesCommunity';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Delay to ensure elements are rendered
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location]);
  return (
    <div className="bg-beige-100">
      <Hero />
      <FallacyDetector />
      <CourseSpotlight />
      <ResourcesCommunity />
      <Footer />
    </div>
  );
};

export default HomePage;
