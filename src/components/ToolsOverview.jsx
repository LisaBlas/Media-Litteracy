import React from 'react';

const ToolsOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-4">Headline Fallacy Detector</h3>
            <p className="text-gray-600 mb-6">Paste a news headline to detect logical fallacies and get an instant analysis.</p>
            <button className="bg-burgundy text-white font-bold py-3 px-6 rounded-md hover:bg-red-800 transition-colors duration-300">Try it now</button>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-800">Article Misinformation Analyzer</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Alpha</span>
            </div>
            <p className="text-gray-600 mb-6">Analyze full articles for bias, misinformation, and emotional manipulation.</p>
            <button className="bg-gray-300 text-gray-500 font-bold py-3 px-6 rounded-md cursor-not-allowed">Coming Soon</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsOverview;
