import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="text-gray-900 font-bold p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
        {/* Placeholder for Logo */}
        <div className="w-10 h-10 bg-blue-500 rounded-full mr-3"></div> 
        <h1 className="text-xl font-bold">Media Fallacies</h1>
      </div>
      <div className="flex items-center space-x-6">
        <a href="#" className="hover:text-blue-300">Home</a>
        <a href="#fallacies" onClick={() => scrollToSection('fallacies')} className="hover:text-blue-300">Fallacies</a>
        <a href="#about" onClick={() => scrollToSection('about')} className="hover:text-blue-300">About</a>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Take the Course
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
