import React from 'react';

const CourseSpotlight = () => {
  return (
    <section className="min-h-screen flex items-center bg-editorial-cream py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left side: Text content */}
          <div className="md:w-5/12 text-center md:text-left">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-6 leading-tight">
              Mastering Fallacies & Media Literacy
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              An in-depth course featuring video modules, interactive quizzes, and downloadable guides to help you become a more discerning news consumer.
            </p>
            <button className="font-sans text-burgundy border border-burgundy rounded-full px-10 py-4 text-lg hover:bg-burgundy hover:text-white transition-colors duration-300 ease-in-out">
              Enroll Now
            </button>
          </div>

          {/* Right side: Image */}
          <div className="md:w-6/12 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gray-200 rounded-lg transform -rotate-2"></div>
              <img 
                src="https://via.placeholder.com/800x600" 
                alt="A collage of course materials" 
                className="relative rounded-lg shadow-xl transform hover:rotate-1 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CourseSpotlight;
