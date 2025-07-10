import React, { useState, useEffect } from 'react';
import fallacyDefinitions from '../../data/fallacy-definitions.json';
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/24/solid';

const FilterSection = ({ 
  headlines, 
  setFilteredHeadlines, 
  activeFilters, 
  setActiveFilters 
}) => {
  const [openCategories, setOpenCategories] = useState({ date: true, source: false, fallacy: false, topic: false });

  const allFallacies = Object.keys(fallacyDefinitions);
  const allSources = [...new Set(headlines.map(h => h.source))];

  const filters = {
    date: {
      label: 'Date',
      options: ['Today', 'This week', 'Past month', 'Past year', 'All time'],
    },
    source: {
      label: 'Source',
      options: allSources,
    },
    topic: {
      label: 'Topic',
      options: [...new Set(headlines.map(h => h.topic).filter(Boolean))],
    },
    fallacy: {
      label: 'Fallacy',
      options: allFallacies,
    },
  };

  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...headlines];

      // Date filter
      if (activeFilters.date && activeFilters.date !== 'All time') {
        const now = new Date();
        filtered = filtered.filter(h => {
          const publishedAt = new Date(h.publishedAt);
          const today = new Date(now);
          switch (activeFilters.date) {
            case 'Today':
              return publishedAt.toDateString() === today.toDateString();
            case 'This week':
              const lastWeek = new Date(new Date(today).setDate(today.getDate() - 7));
              return publishedAt >= lastWeek;
            case 'Past month':
              const lastMonth = new Date(new Date(today).setMonth(today.getMonth() - 1));
              return publishedAt >= lastMonth;
            case 'Past year':
              const lastYear = new Date(new Date(today).setFullYear(today.getFullYear() - 1));
              return publishedAt >= lastYear;
            default:
              return true;
          }
        });
      }

      // Source filter
      if (activeFilters.source) {
        filtered = filtered.filter(h => h.source === activeFilters.source);
      }

      // Fallacy filter
      if (activeFilters.fallacy) {
        filtered = filtered.filter(h => h.fallacy && h.fallacy === activeFilters.fallacy);
      }

      // Topic filter
      if (activeFilters.topic) {
        filtered = filtered.filter(h => h.topic && h.topic === activeFilters.topic);
      }
      
      setFilteredHeadlines(filtered);
    };

    applyFilters();
  }, [activeFilters, headlines, setFilteredHeadlines]);

  const handleFilterSelect = (filterType, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType] === value ? null : value, // Toggle on/off
    }));
  };
  
  const clearFilter = (filterType, e) => {
    e.stopPropagation(); // Prevent the category from toggling
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: null,
    }));
  };

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const hasActiveFilters = Object.values(activeFilters).some(Boolean);

  const clearAllFilters = () => {
    setActiveFilters({ date: null, source: null, fallacy: null, topic: null });
  };

  return (
    <div className="text-editorial-charcoal">
      {/* Header for medium and large screens */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FunnelIcon className="hidden md:block h-5 w-5 text-editorial-charcoal mr-2" aria-hidden="true" />
          <h2 className="text-2xl font-bold font-playfair text-editorial-charcoal">Filter by:</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm font-sans text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Clear all filters"
          >
            Clear All
          </button>
        )}
      </div>
      {Object.entries(filters).map(([key, { label, options }]) => (
        <div key={key} className="mb-4 pb-4 border-b border-gray-300 last:border-b-0">
          <div className="flex justify-between items-center cursor-pointer font-sans" onClick={() => toggleCategory(key)}>
            <h3 className="text-md font-semibold tracking-wider font-sans mb-2 text-editorial-charcoal">{label}</h3>
            <div className="flex items-center">
              {activeFilters[key] && (
                <button 
                  onClick={(e) => clearFilter(key, e)}
                  className="text-xs text-gray-500 hover:text-editorial-charcoal mr-2 font-sans"
                >
                  Clear
                </button>
              )}
              <ChevronDownIcon className={`h-5 w-5 transition-transform duration-300 ${openCategories[key] ? 'rotate-180' : ''}`} />
            </div>
          </div>
          {openCategories[key] && (
            <div className="flex flex-wrap gap-2">
              {options.map(option => (
                <button
                  key={option}
                  onClick={() => handleFilterSelect(key, option)}
                  className={`inline-block border px-3 py-1 text-xs transition-colors duration-200 ${
                    activeFilters[key] === option 
                    ? 'bg-editorial-orange border-editorial-orange font-mono text-editorial-cream' 
                    : 'bg-transparent text-editorial-charcoal border-editorial-charcoal hover:bg-editorial-orange hover:border-editorial-orange hover:text-editorial-cream font-mono'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
