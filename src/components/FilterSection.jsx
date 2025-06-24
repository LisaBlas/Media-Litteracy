import React, { useState, useEffect } from 'react';
import fallacyDefinitions from '../../data/fallacy-definitions.json';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const FilterSection = ({ headlines, setFilteredHeadlines }) => {
  const [activeFilters, setActiveFilters] = useState({
    date: null,
    source: null,
    fallacy: null,
  });
  const [openCategories, setOpenCategories] = useState({ date: true, source: false, fallacy: false });

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

  return (
    <div className="text-editorial-charcoal">
      {Object.entries(filters).map(([key, { label, options }]) => (
        <div key={key} className="mb-6 pb-6 border-b border-gray-300 last:border-b-0">
          <div onClick={() => toggleCategory(key)} className="flex justify-between items-center mb-4 cursor-pointer">
            <h3 className="text-lg font-semibold uppercase tracking-wider">{label}</h3>
            <div className="flex items-center">
              {activeFilters[key] && (
                <button 
                  onClick={(e) => clearFilter(key, e)}
                  className="text-sm text-gray-500 hover:text-editorial-charcoal mr-2"
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
                  className={`inline-block border rounded-md px-3 py-1 text-sm transition-colors duration-200 ${
                    activeFilters[key] === option 
                    ? 'bg-editorial-charcoal text-white border-editorial-charcoal' 
                    : 'bg-transparent text-editorial-charcoal border-editorial-charcoal hover:bg-editorial-charcoal hover:text-white'
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
