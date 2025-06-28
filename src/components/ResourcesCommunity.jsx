import React from 'react';

const ResourcesCommunity = () => {
  return (
    <section className="py-16 md:py-24 bg-editorial-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-12">Resources & Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="/articles" className="text-burgundy hover:underline font-semibold">Articles</a>
          <a href="/newsletter" className="text-burgundy hover:underline font-semibold">Newsletter</a>
          <a href="/glossary" className="text-burgundy hover:underline font-semibold">Glossary of Fallacies</a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesCommunity;
