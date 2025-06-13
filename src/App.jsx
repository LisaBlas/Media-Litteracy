import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ArticleCard from './components/ArticleCard';
import TagFilter from './components/TagFilter';
import headlinesData from '../data/headlines.json';

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [visibleArticleCount, setVisibleArticleCount] = useState(9);
  const [availableTags, setAvailableTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const articlesWithDefaults = headlinesData.headlines.map(article => ({
        ...article,
        tags: article.tags || []
      }));
      setAllArticles(articlesWithDefaults);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (allArticles.length > 0) {
      const allTags = allArticles.reduce((acc, article) => {
        article.tags.forEach(tag => {
          if (!acc.includes(tag)) {
            acc.push(tag);
          }
        });
        return acc;
      }, []);
      setAvailableTags(allTags.sort());
    }
  }, [allArticles]);

  useEffect(() => {
    if (selectedTags.length === 0) {
      setFilteredArticles(allArticles);
    } else {
      setFilteredArticles(
        allArticles.filter(article => 
          selectedTags.some(tag => article.tags.includes(tag))
        )
      );
    }
  }, [selectedTags, allArticles]);

  const handleTagSelect = (tag) => {
    setSelectedTags(prevSelectedTags => {
      if (prevSelectedTags.includes(tag)) {
        return [];
      }
      return [tag];
    });
  };

  const clearAllFilters = () => {
    setSelectedTags([]);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 opacity-80">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Main Content */}
      <main id="headline-cards" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TagFilter 
          tags={availableTags} 
          selectedTags={selectedTags} 
          onTagSelect={handleTagSelect} 
          onClearFilters={clearAllFilters}
        />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12">
          {filteredArticles.length > 0 ? (
            filteredArticles.slice(0, visibleArticleCount).map((article, index) => (
              <ArticleCard key={`${article.url}-${index}`} article={article} index={index} />
            ))
          ) : (
            !loading && <p className="text-orange-500 col-span-full text-center py-10">No articles match the selected tags.</p>
          )}
          {/* Load More Button */}
          {visibleArticleCount < filteredArticles.length && (
            <div className="col-span-full flex justify-center mt-8 mb-4">
              <button
                onClick={() => setVisibleArticleCount(prevCount => prevCount + 9)}
                className="font-bold bg-orange-500 text-white py-3 px-10 text-lg hover:bg-orange-600 transition-colors duration-200 rounded-lg"
              >
                Load More
              </button>
            </div>
          )}
        </div>
        
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm opacity-60">
              © 2025 The Media Watch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
