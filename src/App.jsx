import React, { useState, useEffect } from 'react';
import ArticleCard from './components/ArticleCard';
import TagFilter from './components/TagFilter'; // Import TagFilter
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
      <div className="min-h-screen bg-editorial-cream flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-editorial-charcoal mx-auto"></div>
          <p className="mt-4 text-editorial-charcoal opacity-80">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-editorial-cream">
      {/* Header */}
      <header className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair font-bold text-3xl sm:text-4xl text-editorial-charcoal">The Media Watch</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-editorial-charcoal mb-4">
            Uncovering the Narrative
          </h2>
          <p className="text-lg text-editorial-charcoal max-w-3xl mx-auto opacity-80">
            We analyze today's headlines, exposing logical fallacies, biases, and misinformation. 
            This is your guide to critical thinking in a complex media landscape.
          </p>
        </div>

        <TagFilter 
          tags={availableTags} 
          selectedTags={selectedTags} 
          onTagSelect={handleTagSelect} 
          onClearFilters={clearAllFilters}
        />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.slice(0, visibleArticleCount).map((article, index) => (
              <ArticleCard key={article.url || index} article={article} index={index} />
            ))
          ) : (
            !loading && <p className="text-editorial-orange col-span-full text-center py-10">No articles match the selected tags.</p>
          )}
          {/* Load More Button */}
          {visibleArticleCount < filteredArticles.length && (
            <div className="col-span-full flex justify-center mt-8 mb-4">
              <button
                onClick={() => setVisibleArticleCount(prevCount => prevCount + 9)}
                className="font-playfair font-bold bg-editorial-charcoal text-editorial-cream py-3 px-10 text-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Load More
              </button>
            </div>
          )}
        </div>
        
      </main>

      {/* Footer */}
      <footer className="bg-editorial-charcoal text-editorial-cream mt-16">
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
