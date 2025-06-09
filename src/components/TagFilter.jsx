import React from 'react';

const TagFilter = ({ tags, selectedTags, onTagSelect, onClearFilters }) => {
  if (!tags || tags.length === 0) {
    return null; // Don't render if there are no tags
  }

  return (
    <div className="mb-8 p-4 bg-brutalist-block-dark border-2 border-brutalist-stroke flex items-center gap-4">
      <h3 className="font-bebas text-xl text-brutalist-text uppercase tracking-wider flex-shrink-0">Filter by Topic:</h3>
      <div className="flex flex-wrap gap-2 flex-grow">
        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => onTagSelect(tag)}
              className={`px-3 py-1.5 font-bebas text-sm uppercase tracking-wide border-2 
                          ${isSelected 
                            ? 'bg-brutalist-accent-red text-brutalist-bg shadow-hard-xs transform scale-105'
                            : 'bg-brutalist-bg text-brutalist-text hover:bg-brutalist-accent-red hover:text-brutalist-bg'}
                          border-brutalist-stroke focus:outline-none focus-visible:ring-2 focus-visible:ring-brutalist-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-brutalist-block-dark transition-all duration-150 ease-in-out`}
            >
              {tag}
            </button>
          );
        })}
      </div>
      {selectedTags && selectedTags.length > 0 && (
        <button 
          onClick={onClearFilters}
          className="px-3 py-1.5 font-bebas text-xs uppercase tracking-wide border-2 border-brutalist-stroke bg-brutalist-bg text-brutalist-text hover:bg-brutalist-stroke hover:text-brutalist-text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brutalist-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-brutalist-block-dark transition-all duration-150 ease-in-out flex-shrink-0"
        >
          Clear Filter
        </button>
      )}
    </div>
  );
};

export default TagFilter;
