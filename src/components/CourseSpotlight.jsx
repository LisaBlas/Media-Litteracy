import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CourseSpotlight = () => {
  const modules = [
    { title: 'Module 1: Introduction to Logical', description: 'Explore the basics of logical fallacies, why they matter, and how they influence media narratives.' },
    { title: 'Module 2: Common Fallacy Types', description: 'Dive deep into the most prevalent fallacies found in headlines and learn to identify them quickly.' },
    { title: 'Module 3: Cognitive Bias & Media', description: 'Understand how cognitive biases shape media consumption and how to mitigate their impact.' },
    { title: 'Module 4: Practical Analysis', description: 'Apply your knowledge through real-world headline analyses with guided explanations.' },
    { title: 'Module 5: Building Critical Habits', description: 'Develop daily habits to stay informed and critically engaged with news sources.' },
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="min-h-screen flex items-center bg-editorial-orange py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left side: Text content */}
          <div className="md:w-5/12 text-center md:text-left text-editorial-cream">
            <h2 className="font-playfair text-6xl font-bold md:text-6xl mb-8">
              Mastering Fallacies and Media Literacy
            </h2>
            <p className="text-lg mb-10 font-light">
              An in-depth course featuring video modules, interactive quizzes, and downloadable guides to help you become a more discerning news consumer.
            </p>
            <form className="flex flex-col md:flex-row items-left justify-left gap-4 max-w-xl">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full flex-grow px-6 py-3 text-xs sm:text-sm font-mono text-editorial-charcoal bg-editorial-cream border-2 border-editorial-orange rounded-none focus:outline-none focus:border-editorial-orange focus:ring-0 transition-colors"
              />
              <button type="submit" className="w-60 text-center text-editorial-cream border-editorial-cream border-2 font-mono hover:bg-editorial-cream hover:text-editorial-orange text-xs sm:text-sm py-2 px-4 transition-colors duration-100 transform hover:scale-105 shrink-0">
                Join the Waitlist
              </button>
            </form>
          </div>

          {/* Right side: Modules Tabs */}
          <div className="md:w-6/12 mt-12 md:mt-0 flex flex-col md:flex-row gap-8">
            <div className="flex flex-col space-y-2 w-full md:w-5/12">
              {modules.map((module, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`relative flex flex-col text-left pl-4 pr-2 py-3 overflow-hidden text-md md:text-base transition-opacity duration-150 ${active === idx ? 'text-burgundy font-bold opacity-100' : 'text-editorial-cream opacity-50 hover:opacity-100'}`}
                >
                  {/* Animated vertical line / rectangle */}
        <motion.span
          initial={{ width: 4 }}
          animate={active === idx ? { width: '100%' } : { width: 4 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute left-0 top-0 h-full bg-white"
        />
        <span className="relative z-10">{module.title}</span>
        {/* Extra content revealed when active */}
        <AnimatePresence>
          {active === idx && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 mt-1 text-xs opacity-90"
            >
              {module.description || ''}
            </motion.span>
          )}
        </AnimatePresence>
                </button>
              ))}
            </div>
            </div>
          </div>

        </div>
    </section>
  );
};

export default CourseSpotlight;
