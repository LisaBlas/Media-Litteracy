import React from 'react';

const NewsletterSignup = () => {
  return (
    <section className="min-h-screen flex items-center bg-white py-20">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">Stay Informed</h2>
        <p className="text-lg text-gray-600 mb-12">
          Get tips on spotting bias and updates on our tools, delivered straight to your inbox.
        </p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="your.email@example.com"
            className="font-sans w-full flex-grow px-6 py-4 text-lg text-gray-700 bg-gray-50 border-2 border-gray-200 rounded-full focus:outline-none focus:border-burgundy focus:ring-0 transition-colors"
          />
          <button
            type="submit"
            className="font-sans w-full md:w-auto bg-burgundy text-white rounded-full px-10 py-4 text-lg hover:bg-red-800 transition-colors duration-300 ease-in-out shrink-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
