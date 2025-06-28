import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import ArticleCard from './ArticleCard';

const FallacyDetector = () => {
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
    "Instant fallacy detection in headlines",
    "Clear, jargon-free explanations",
    "Identify patterns of media manipulation",
    "Strengthen your critical thinking skills",
  ];

  const howItWorksSteps = [
    { id: '01', name: 'Paste a Headline', description: 'Copy any news headline from an article you want to check.' },
    { id: '02', name: 'Get Instant Analysis', description: 'Our AI analyzes the text for over a dozen common logical fallacies.' },
    { id: '03', name: 'Understand the Bias', description: 'Receive a clear breakdown of the potential manipulation tactics at play.' },
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

            {/* How It Works Steps */}
            <div>
              <h3 className="font-sans font-semibold uppercase tracking-wider text-gray-500 mb-6">How It Works</h3>
              <div className="space-y-6 border-l-2 border-gray-200 ml-2">
                {howItWorksSteps.map((step) => (
                  <div key={step.id} className="relative pl-8">
                    <div className="absolute -left-2.5 top-1 h-4 w-4 bg-burgundy rounded-full border-4 border-editorial-cream"></div>
                    <p className="font-serif text-xl font-semibold text-gray-800">{step.name}</p>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FallacyDetector;
