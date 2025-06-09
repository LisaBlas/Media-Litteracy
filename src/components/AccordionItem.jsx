import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-brutalist-block-dark last:border-b-0">
      <h2>
        <button
          type="button"
          className="flex justify-between items-center w-full p-3 text-left text-brutalist-text font-bold text-sm bg-brutalist-block-dark hover:bg-brutalist-accent-red hover:text-brutalist-text focus:outline-none"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${title.replace(/\s+/g, '-')}`}
        >
          <span>{title}</span>
          {isOpen ? (
            <ChevronUpIcon className="w-5 h-5 text-brutalist-accent-red" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-brutalist-text opacity-70" />
          )}
        </button>
      </h2>
      {isOpen && (
        <div
          id={`accordion-content-${title.replace(/\s+/g, '-')}`}
          className="p-3 pt-1 text-sm text-brutalist-text opacity-90 bg-brutalist-background transition-all duration-300 ease-in-out origin-top animate-accordion-down"
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
