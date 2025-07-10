import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

/**
 * A floating button that appears after scrolling down a bit and scrolls the page
 * smoothly to the top when clicked. It is positioned bottom-right and designed
 * to be unobtrusive on both desktop and mobile. Placed in App.jsx so it exists
 * on all pages.
 */
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility, { passive: true });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40 p-3 rounded-full bg-editorial-orange text-white shadow-lg transition-opacity duration-300 hover:opacity-100 focus:outline-none ${
        isVisible ? 'opacity-80' : 'opacity-0 pointer-events-none'
      }`}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTopButton;
