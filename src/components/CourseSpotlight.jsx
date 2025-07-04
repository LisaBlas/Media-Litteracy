import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CourseSpotlight = () => {
  const modules = [
    { title: 'Introduction to Core Concepts - Fallacies and Biases', description: 'Understand the basics and why they matter. Learn about the behaviour and habits of your brain that influence how you process information. Preview this module.' },
    { title: 'Spotlight on mainstream News and Reporting (Coming Soon)', description: 'See how events become headlines and learn to read between the lines. Sharpen your eye for bias, logical flaws and manipulation techniques. Try our first interactive tool.' },
    { title: 'Spotlight on Social Media and AI (Coming Soon)', description: 'Dive into how short-form formats, algorithms and AI infuence our perception of truth. Gain confidence to spot fake and misinformed content.' },
    { title: 'Your daily Cognitive Biases (Coming Soon)', description: 'Explore the blind spots in your own mind that change how you see the world. Learn how to spot and counteract biases that may cloud your judgement and decisions.' },
    { title: 'Open Exchange, heated Argument or constructive Debate? (Coming Soon)', description: 'Discover tweaks that can shift and improve conversations with friends and family. Respond to faulty arguments and errors in reasoning with confidence and poise.' },
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="min-h-screen flex items-center bg-editorial-orange py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left side: Text content */}
          <div className="md:w-5/12 text-center md:text-left text-editorial-cream">
            <h2 className="font-playfair text-4xl font-bold md:text-4xl mb-4 opacity-40">
              Course coming soon:
            </h2>
            <h2 className="font-playfair text-6xl font-bold md:text-6xl mb-8">
              Critical Thinking in Everyday Life
            </h2>
            <p className="text-lg mb-10 font-light">
              Learn to navigate fallacies, biases and contentious topics with easy explanations based on real world examples. Become more aware and confident by practising with our interactive, AI supported tools and downloadable content. You can explore the modules in any order and at your own pace. 
            </p>
            <p className="text-lg mb-10 font-light">
              We're still hard at work perfecting the course - join the waitlist to be notified when it's ready. The first 20 curious minds will receive a discount code!
            </p>
            <form className="flex flex-col md:flex-row items-left justify-left gap-4 max-w-xl text-editorial-orange">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full flex-grow px-6 py-3 text-xs sm:text-sm font-mono text-editorial-cream bg-editorial-orange border-2 border-editorial-cream rounded-none"
              />
              <button type="submit" className="w-60 text-center text-editorial-orange border-editorial-orange bg-editorial-cream border-2 font-mono hover:bg-editorial-charcoal hover:border-editorial-charcoal hover:text-editorial-cream text-xs sm:text-sm py-2 px-4 transition-colors duration-100 transform hover:scale-105 shrink-0">
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
                  className={`w-full relative flex flex-col text-left pl-4 pr-2 py-3 overflow-visible text-md md:text-base transition-opacity duration-150 ${active === idx ? 'text-burgundy font-bold opacity-100' : 'text-editorial-cream opacity-50 hover:opacity-100'}`}
                >
                  {/* Animated vertical line / rectangle */}
        <motion.span
          initial={{ width: 4 }}
          animate={active === idx ? { width: '200%' } : { width: 4 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute left-0 top-0 h-full bg-white"
        />
        <motion.span
            initial={{ x: -10, width: '100%' }}
            animate={{ x: 0, width: '200%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="relative z-10 block text-left text-md pr-4"
          >
            {module.title}
          </motion.span>
        {/* Extra content revealed when active */}
        <AnimatePresence>
          {active === idx && (
            <motion.span
              initial={{ x: -20, width: '100%' }}
              animate={{ x: 0, width: '200%' }}
              exit={{ x: -20, width: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="relative z-10 mt-1 text-md font-light opacity-90"
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
