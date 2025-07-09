import React, { useState, useEffect } from 'react';
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import FilterSection from '../components/FilterSection';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    date: null,
    source: null,
    fallacy: null,
  });

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/data/headlines.json');
        const fetchedArticles = response.data.headlines || [];
        setArticles(fetchedArticles);
        setFilteredArticles(fetchedArticles);
        setLoading(false);
      } catch (err) {
        setError('Failed to load articles.');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div className="text-center p-8 bg-beige-100">Loading articles...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;

  return (
    <div className="relative container mx-auto px-4 py-12 lg:py-20 lg:px-40">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-editorial-charcoal">Fact or Fallacy?</h1>
        <span className="ml-4 px-3 py-1 text-sm font-semibold bg-editorial-orange text-editorial-cream whitespace-nowrap">Interactive tool</span>
      </div>
      {/* Subtle underline */}
      <div className="w-full h-px bg-editorial-charcoal mb-12"></div> 
      {/* Desktop / Tablet layout */}
      <div className="hidden md:grid grid-cols-3 gap-16 border border-beige-100 shadow-lg p-10">
        {/* Sidebar filters */}
        <aside className="col-span-1">
          <FilterSection
            headlines={articles}
            setFilteredHeadlines={setFilteredArticles}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
          />
        </aside>
        {/* Articles */}
        <div className="col-span-2 grid grid-cols-1 gap-8">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={`${article.url}-${index}`} article={article} />
          ))}
        </div>
      </div>

      {/* Mobile articles list */}
      <div className="md:hidden grid grid-cols-1 gap-8 border border-beige-100 shadow-lg p-6">
        {filteredArticles.map((article, index) => (
          <ArticleCard key={`${article.url}-${index}`} article={article} />
        ))}
      </div>

      {/* Mobile filter toggle button */}
      <button
        onClick={() => setMobileFiltersOpen(true)}
        className="md:hidden fixed bottom-6 right-6 bg-editorial-orange p-4 rounded-full shadow-lg text-editorial-cream focus:outline-none"
        aria-label="Open filters"
      >
        <FunnelIcon className="h-6 w-6" />
      </button>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div className="flex-1 bg-black/50" onClick={() => setMobileFiltersOpen(false)}></div>
          {/* Drawer */}
          <div className="w-3/4 max-w-xs bg-editorial-cream p-6 overflow-y-auto">
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="mb-4 text-editorial-charcoal flex items-center space-x-1"
              aria-label="Close filters"
            >
              <XMarkIcon className="h-5 w-5" />
              <span>Close</span>
            </button>
            <FilterSection
              headlines={articles}
              setFilteredHeadlines={setFilteredArticles}
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlesPage;
