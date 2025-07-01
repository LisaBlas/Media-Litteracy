import React, { useState } from 'react';

const CourseSpotlight = () => {
  const modules = [
    { title: '-- Module 1: Introduction to Logical Fallacies', description: 'Explore the basics of logical fallacies, why they matter, and how they influence media narratives.' },
    { title: '-- Module 2: Common Fallacy Types', description: 'Dive deep into the most prevalent fallacies found in headlines and learn to identify them quickly.' },
    { title: '-- Module 3: Cognitive Bias & Media', description: 'Understand how cognitive biases shape media consumption and how to mitigate their impact.' },
    { title: '-- Module 4: Practical Analysis', description: 'Apply your knowledge through real-world headline analyses with guided explanations.' },
    { title: '-- Module 5: Building Critical Habits', description: 'Develop daily habits to stay informed and critically engaged with news sources.' },
  ];
  const [active, setActive] = useState(0);

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

          {/* Right side: Modules Tabs */}
          <div className="md:w-6/12 mt-12 md:mt-0 flex flex-col md:flex-row gap-8">
            <div className="flex flex-col space-y-2 w-full md:w-5/12">
              {modules.map((module, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`text-left px-4 py-3 rounded-r-lg border-l-4 font-mono text-sm md:text-base transition-colors duration-150 ${active === idx ? 'bg-burgundy text-white border-burgundy' : 'text-gray-800 border-transparent hover:bg-burgundy/10'}`}
                >
                  {module.title}
                </button>
              ))}
            </div>
            <div className="card-background-pattern flex-1 bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-2xl text-burgundy mb-4">
                {modules[active].title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {modules[active].description}
              </p>
            </div>
            </div>
          </div>

        </div>
    </section>
  );
};

export default CourseSpotlight;
