import React from 'react';

/**
 * Simple newsletter signup component used on the HomePage.
 * Currently a presentational component only – it does not perform a real request.
 * Replace the `onSubmit` handler with real signup logic / API when available.
 */
const NewsletterSignup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate real newsletter signup logic (API call, validation, success message, etc.)
    // eslint-disable-next-line no-alert
    alert('Thanks for signing up! You will hear from us soon.');
  };

  return (
    <section className="py-20 bg-editorial-orange text-editorial-cream">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
          Join our Newsletter
        </h2>
        <p className="text-lg mb-8 font-light">
          Get media-literacy tips, course updates, and curated resources delivered
          straight to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="your.email@example.com"
            className="w-full flex-grow px-6 py-3 text-sm font-mono text-editorial-charcoal bg-editorial-cream border-2 border-editorial-orange rounded-none focus:outline-none focus:border-editorial-cream focus:ring-0 transition-colors"
          />
          <button
            type="submit"
            className="w-48 text-center text-editorial-cream border-editorial-cream border-2 font-mono hover:bg-editorial-cream hover:text-editorial-orange text-sm py-2 px-4 transition-colors duration-100 transform hover:scale-105 shrink-0"
          >
            Sign&nbsp;Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
