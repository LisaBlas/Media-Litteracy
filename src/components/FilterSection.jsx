import React, { useState } from 'react';

const FilterSection = ({ headlines, setFilteredHeadlines }) => {
  const [openFilter, setOpenFilter] = useState(null);
  const [activeFilters, setActiveFilters] = useState({
    topic: null,
    date: null,
    source: null,
  });

  const toggleFilter = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const handleFilterSelect = (filterType, value) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev, [filterType]: value };
      applyFilters(newFilters);
      return newFilters;
    });
  };

  const applyFilters = (filters) => {
    let filtered = [...headlines];
    if (filters.date && filters.date !== 'All time') {
      const now = new Date();
      filtered = filtered.filter(h => {
        const publishedAt = new Date(h.publishedAt);
        switch (filters.date) {
          case 'Today': return publishedAt.toDateString() === now.toDateString();
          case 'This week': return publishedAt >= new Date(now.setDate(now.getDate() - 7));
          case 'Past month': return publishedAt >= new Date(now.setMonth(now.getMonth() - 1));
          case 'Past year': return publishedAt >= new Date(now.setFullYear(now.getFullYear() - 1));
          default: return true;
        }
      });
    }
    if (filters.source) {
      filtered = filtered.filter(h => h.source === filters.source);
    }
    setFilteredHeadlines(filtered);
  };

  const filters = {
    topic: { emoji: '📚', options: ['Placeholder 1', 'Placeholder 2'] },
    date: { emoji: '📅', options: ['Today', 'This week', 'Past month', 'Past year', 'All time'] },
    source: { emoji: '📰', options: [...new Set(headlines.map(h => h.source))] },
  };

  const CategoryPill = ({ filterType, emoji, onClick, isOpen }) => (
    <button
      onClick={() => onClick(filterType)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-white transition-all duration-300 ${isOpen ? 'bg-editorial-orange' : 'bg-editorial-charcoal hover:bg-editorial-orange'}`}>
      <span>{emoji}</span>
      <span className="font-medium">{filterType.charAt(0).toUpperCase() + filterType.slice(1)}</span>
    </button>
  );

  const OptionPill = ({ label, filterType, isActive, onClick }) => (
    <button
      onClick={() => onClick(filterType, isActive ? null : label)}
      className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${isActive ? 'bg-editorial-orange text-white' : 'bg-gray-200 text-editorial-charcoal hover:bg-gray-300'}`}>
      {label}
    </button>
  );

  return (
    <div className="sticky-filter-container mb-12">
      <div className="flex justify-center gap-4 mb-4">
        {Object.keys(filters).map(key => (
          <CategoryPill key={key} filterType={key} emoji={filters[key].emoji} onClick={toggleFilter} isOpen={openFilter === key} />
        ))}
      </div>
      {openFilter && (
        <div className="bg-editorial-cream p-4 rounded-lg shadow-md">
          <div className="flex flex-wrap justify-center gap-2">
            {filters[openFilter].options.map(option => (
              <OptionPill key={option} label={option} filterType={openFilter} isActive={activeFilters[openFilter] === option} onClick={handleFilterSelect} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
