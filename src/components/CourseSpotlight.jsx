import React from 'react';

const CourseSpotlight = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://via.placeholder.com/600x400" alt="Course thumbnail" className="rounded-lg shadow-lg"/>
          </div>
          <div className="text-left">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mastering Fallacies & Media Literacy</h2>
            <p className="text-gray-600 mb-6">An in-depth course featuring video modules, interactive quizzes, and downloadable guides to help you become a more discerning news consumer.</p>
            <button className="bg-burgundy text-white font-bold py-3 px-6 rounded-md hover:bg-red-800 transition-colors duration-300">Enroll Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSpotlight;
