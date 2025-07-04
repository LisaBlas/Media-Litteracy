import React from 'react';
import { SparklesIcon, NewspaperIcon, AcademicCapIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

// Inline X (formerly Twitter) logo icon
const XIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M2 3h5.64l4.58 6.23L17.96 3H22l-7.33 9.55L22 21h-5.64l-4.86-6.6L6.04 21H2l7.62-9.92L2 3z" />
  </svg>
);

const pillars = [
  {
    title: 'Innovative AI',
    description: 'Custom models trained on hundreds of fallacy examples.',
    icon: SparklesIcon,
  },
  {
    title: 'Media Expertise',
    description: 'Historical and data-focused analysis of policies and rhetoric',
    icon: NewspaperIcon,
  },
  {
    title: 'Interactive Learning',
    description: 'Hands-on tools & courses that make theory practical.',
    icon: AcademicCapIcon,
  },
];

const ResourcesCommunity = () => {
  return (
    <section className="min-h-screen flex items-center bg-beige-100 py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
        {/* Left Column */}
        <div>
          <h2 className="font-playfair font-bold text-editorial-orange opacity-40 text-2xl md:text-3xl lg:text-3xl mb-4">
            About us:
          </h2>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-editorial-charcoal mb-4">
            Who we are and why we care
          </h2>
          <h3 className="text-xl md:text-2xl text-editorial-orange font-light mb-2">
            Using great Design and new AI Tools for Good
          </h3>
          {/* External Links */}
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://x.com/BerliozGordon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-burgundy hover:text-editorial-charcoal transition-colors"
              aria-label="X profile"
            >
              <XIcon className="h-6 w-6" />
            </a>
            <a
              href="https://lisablas.github.io/BleepBloop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-burgundy hover:text-editorial-charcoal transition-colors"
              aria-label="Portfolio website"
            >
              <GlobeAltIcon className="h-6 w-6" />
            </a>
          </div>
          <p className="text-editorial-charcoal font-light leading-relaxed mb-4 text-lg">
           We're a design and development duo creating digital experiences and services. Our mission is to shine a light on hidden fallacies and bias in the news.
          </p>
          <p className="text-editorial-charcoal font-light leading-relaxed text-lg">
            By combining cutting-edge AI with time-tested journalistic rigor, we equip everyone—from students to professionals—to question what they read.
          </p>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 gap-8">
          {pillars.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex items-start space-x-4">
              <Icon className="h-10 w-10 text-burgundy flex-shrink-0" aria-hidden="true" />
              <div>
                <h4 className="font-serif text-2xl text-gray-800 mb-1">{title}</h4>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesCommunity;
