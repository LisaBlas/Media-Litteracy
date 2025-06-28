import React from 'react';
import { NewspaperIcon, EnvelopeIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const resources = [
  {
    name: 'Articles',
    href: '/articles',
    description: 'Dive deeper into media literacy with our collection of in-depth articles and case studies.',
    icon: NewspaperIcon,
  },
  {
    name: 'Newsletter',
    href: '/newsletter',
    description: 'Subscribe to our newsletter for weekly insights, tips, and updates on new tools.',
    icon: EnvelopeIcon,
  },
  {
    name: 'Glossary of Fallacies',
    href: '/glossary',
    description: 'A comprehensive guide to understanding and identifying logical fallacies in arguments.',
    icon: BookOpenIcon,
  },
];

const ResourcesCommunity = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-white py-20">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-6">Resources & Community</h2>
        <p className="text-lg text-gray-600 mb-20 max-w-2xl mx-auto">Explore our curated resources to deepen your understanding of media literacy and join our community.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {resources.map((item) => (
            <a key={item.name} href={item.href} className="card-background-pattern group block p-8 border border-gray-200 rounded-lg hover:shadow-xl hover:border-burgundy transition-all duration-300 ease-in-out">
              <item.icon className="h-10 w-10 mx-auto mb-6 text-burgundy" aria-hidden="true" />
              <h3 className="font-serif text-2xl text-gray-800 mb-3">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesCommunity;
