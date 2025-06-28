import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-editorial-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="step">
            <div className="font-serif text-5xl font-bold text-burgundy mb-4">1</div>
            <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">Input</h3>
            <p className="text-gray-600">Paste a URL, upload a document, or simply type text into the analyzer.</p>
          </div>
          <div className="step">
            <div className="font-serif text-5xl font-bold text-burgundy mb-4">2</div>
            <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">AI Analysis</h3>
            <p className="text-gray-600">Our AI scans the text for logical fallacies, emotional manipulation, and hidden bias.</p>
          </div>
          <div className="step">
            <div className="font-serif text-5xl font-bold text-burgundy mb-4">3</div>
            <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">Report</h3>
            <p className="text-gray-600">Receive an annotated summary with insights and educational tips.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
