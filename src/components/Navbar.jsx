import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`hero-background-pattern text-gray-900 font-mono p-4 flex justify-between items-center sticky top-0 z-50 border-b-2 border-editorial-orange transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex items-center">
        <h1 className="text-xl font-bold font-playfair">Doublethink</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6 font-mono">
        <a href="#" className="hover:text-editorial-orange transition-all font-normal hover:font-bold">Home</a>
        <a href="#fallacies" onClick={() => scrollToSection('fallacies')} className="hover:text-editorial-orange transition-all font-normal hover:font-bold">Examples</a>
        <a href="#about" onClick={() => scrollToSection('about')} className="hover:text-editorial-orange transition-all font-normal hover:font-bold">About</a>
        <Link to="/course" className="bg-editorial-orange hover:opacity-90 text-white py-2 px-4 transition-all font-normal hover:font-bold">
          Learn
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full hero-background-pattern shadow-lg flex flex-col items-center space-y-4 py-4 border-b-2 border-editorial-orange">
          <a href="#" onClick={() => setIsOpen(false)} className="hover:text-editorial-orange transition-all font-normal hover:font-bold">Home</a>
          <a href="#fallacies" onClick={() => scrollToSection('fallacies')} className="hover:text-editorial-orange transition-all font-normal hover:font-bold">Examples</a>
          <a href="#about" onClick={() => scrollToSection('about')} className="hover:text-editorial-orange transition-all font-normal hover:font-bold">About</a>
          <Link to="/course" className="bg-editorial-orange hover:opacity-90 text-white py-2 px-4 transition-all font-normal hover:font-bold">
            Learn
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;