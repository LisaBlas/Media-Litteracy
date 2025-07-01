import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import ArticleCard from './ArticleCard';

const FallacyDetector = () => {
  const navigate = useNavigate();
  
  // A sample article to display in the ArticleCard
  const dummyArticle = {
    title: "Global Coffee Shortage Looms, Experts Warn of Price Surge",
    source: "The Daily Grind",
    image: "/images/article-placeholder.jpg", // A placeholder image path
    fallacy: "Appeal to Fear",
    explanation: "This headline uses fear-mongering to create a sense of urgency and anxiety, potentially exaggerating the situation to grab attention.",
    publishedAt: new Date().toISOString(),
    url: '#',
    additionalBiases: [],
  };

  const benefits = [
    "Fallacy detection in recent headlines",
    "Clear, jargon-free explanations",
    "Identify patterns of media manipulation",
    "Strengthen your critical thinking skills",
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Section: Title and Description */}
        <div className="mx-auto text-center max-w-3xl mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-gray-800 mb-6">
            Headline Fallacy Detector
          </h1>
          <p className="text-xl text-gray-600">
            Paste a news headline to detect logical fallacies and get an instant analysis of its structure and potential for bias.
          </p>
        </div>

        {/* Bottom Section: Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          
          {/* Left Column: ArticleCard Example */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <ArticleCard article={dummyArticle} index={0} />
            </div>
          </div>

          {/* Right Column: Benefits and How It Works */}
          <div className="flex flex-col justify-center">
            
            {/* Benefits List */}
            <div className="mb-12">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-burgundy mr-3 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fallacy Tool Button */}
            <div>
              <button 
                onClick={() => navigate('/articles')}
                className="w-80 text-center text-editorial-orange border-editorial-orange border-2 font-mono hover:bg-editorial-orange hover:text-editorial-cream font-mono text-xs sm:text-sm py-3 px-6 transition-colors duration-100 transform hover:scale-105"
              >
                Explore our first Tool
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FallacyDetector;
