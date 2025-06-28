import React from 'react';

const NewsletterSignup = () => {
  return (
    <section className="py-16 md:py-24 bg-editorial-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">Stay Informed</h2>
        <p className="text-gray-600 mb-8">Tips on spotting bias and misinformation, delivered straight to your inbox.</p>
        <form className="max-w-md mx-auto">
          <div className="flex items-center">
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-l-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-burgundy" />
            <button type="submit" className="bg-burgundy text-white font-bold py-3 px-6 rounded-r-md hover:bg-red-800 transition-colors duration-300">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
