import React from 'react';

const HowItWorks = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-white py-20">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-6">How It Works</h2>
        <p className="text-lg text-gray-600 mb-20 max-w-2xl mx-auto">A simple, three-step process to analyze media content for bias and misinformation.</p>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-left space-y-12 md:space-y-0 md:space-x-8">
          
          {/* Step 1 */}
          <div className="flex-1 flex">
            <span className="font-serif text-6xl text-gray-300 mr-6">1</span>
            <div>
              <h3 className="font-serif text-2xl text-gray-800 mb-2">Input</h3>
              <p className="text-gray-600">Paste a URL, upload a document, or simply type text into the analyzer.</p>
            </div>
          </div>

          <div className="hidden md:block flex-shrink-0 self-center border-t-2 border-dashed border-gray-200 w-24"></div>

          {/* Step 2 */}
          <div className="flex-1 flex">
            <span className="font-serif text-6xl text-gray-300 mr-6">2</span>
            <div>
              <h3 className="font-serif text-2xl text-gray-800 mb-2">AI Analysis</h3>
              <p className="text-gray-600">Our AI scans the text for logical fallacies, emotional manipulation, and hidden bias.</p>
            </div>
          </div>

          <div className="hidden md:block flex-shrink-0 self-center border-t-2 border-dashed border-gray-200 w-24"></div>

          {/* Step 3 */}
          <div className="flex-1 flex">
            <span className="font-serif text-6xl text-gray-300 mr-6">3</span>
            <div>
              <h3 className="font-serif text-2xl text-gray-800 mb-2">Report</h3>
              <p className="text-gray-600">Receive an annotated summary with insights and educational tips.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
