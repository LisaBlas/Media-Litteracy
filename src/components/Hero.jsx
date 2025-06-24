import React, { useState, useEffect } from 'react';
import { EyeIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["Narratives.", "Fallacies.", "Headlines.", "Deceptions.", "Biases."];

  useEffect(() => {
    const current = words[currentWordIndex];
    const speed = isDeleting ? 80 : 55;
    const pause = isDeleting ? 300 : 1500;

    if (!isDeleting && typedWord === current) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(pauseTimer);
    } else if (isDeleting && typedWord === "") {
      setIsDeleting(false);
      setCurrentWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      setTypedWord(
        isDeleting
          ? current.substring(0, typedWord.length - 1)
          : current.substring(0, typedWord.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [typedWord, isDeleting, currentWordIndex]);
  const scrollToCards = () => {
    const cardsSection = document.getElementById('headline-cards');
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-40 hero-background-pattern">
      <div className="max-w-6xl mx-auto text-center px-4 md:px-8">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-playfair mb-14 text-editorial-charcoal flex flex-col items-center justify-center min-h-[12rem] md:min-h-[18rem]">
          <span className="block">Uncovering the</span>
          <span className="block text-editorial-orange mt-6">
            {typedWord}
            <span className="border-r-2 border-editorial-orange animate-pulse ml-1" />
          </span>
        </h1>
        <p className="text-lg md:text-xl text-editorial-charcoal max-w-2xl mx-auto mb-10 text-editorial-charcoal">
          Your essential guide to critical thinking in our complex media landscape. Your essential guide to critical thinking in our complex media landscape.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={scrollToCards}
            className="w-80 text-center text-editorial-orange border-editorial-orange border-2 font-mono hover:bg-editorial-orange hover:text-editorial-cream font-mono text-sm font-bold py-3 px-6 transition-colors duration-100 transform hover:scale-105"
          >
            Explore Media Fallacies
          </button>
          <Link 
            to="/course"
            className="w-80 text-center text-editorial-orange border-editorial-orange border-2 font-mono hover:bg-editorial-orange hover:text-editorial-cream font-mono text-sm font-bold py-3 px-6 transition-colors duration-100 transform hover:scale-105"
          >
            Discover the Course
          </Link>
        </div>
            </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 5.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <EyeIcon className="w-8 h-8 text-editorial-charcoal" />
            <ChevronDownIcon className="w-6 h-6 text-editorial-charcoal" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
