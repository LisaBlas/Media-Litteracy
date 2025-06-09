import React, { useState, useEffect } from 'react';
import ArticleCard from './components/ArticleCard';
import TagFilter from './components/TagFilter'; // Import TagFilter
import headlinesData from '../data/headlines.json';

function App() {
  const [allArticles, setAllArticles] = useState([]); // Renamed for clarity
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [visibleArticleCount, setVisibleArticleCount] = useState(9); // Show 3 rows (3x3 grid) initially
  const [availableTags, setAvailableTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      const articlesWithDefaults = headlinesData.headlines.map(article => ({
        ...article,
        tags: article.tags || [] // Ensure every article has a tags array
      }));
      setAllArticles(articlesWithDefaults);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Effect to extract all unique tags once articles are loaded
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
      setAvailableTags(allTags.sort()); // Sort for consistent order
    }
  }, [allArticles]);

  // Effect to filter articles when selectedTags or allArticles change
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
      // If the clicked tag is already selected, clear selection
      if (prevSelectedTags.includes(tag)) {
        return [];
      }
      // Otherwise, select only the clicked tag
      return [tag];
    });
  };

  const clearAllFilters = () => {
    setSelectedTags([]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-brutalist-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brutalist-accent-red mx-auto"></div>
          <p className="mt-4 text-slate-300">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brutalist-background">
      {/* Header */}
      <header className="bg-brutalist-block-dark border-b-2 border-brutalist-accent-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="font-bebas text-brutalist-text font-black uppercase tracking-wider text-4xl sm:text-5xl">News Hub</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-300 hover:text-brutalist-accent-red focus-visible:text-brutalist-accent-red">Home</a>
              <a href="#" className="text-slate-300 hover:text-brutalist-accent-red focus-visible:text-brutalist-accent-red">Politics</a>
              <a href="#" className="text-slate-300 hover:text-brutalist-accent-red focus-visible:text-brutalist-accent-red">Technology</a>
              <a href="#" className="text-slate-300 hover:text-brutalist-accent-red focus-visible:text-brutalist-accent-red">Science</a>
              <a href="#" className="text-slate-300 hover:text-brutalist-accent-red focus-visible:text-brutalist-accent-red">Sports</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Headline Section */}
        <div className="text-center mb-12">
          <h2 className="font-bebas text-brutalist-text font-black uppercase tracking-wider text-3xl sm:text-4xl p-3 mb-4 bg-brutalist-block-dark shadow-hard-md inline-block">
            Stay Informed with Today's Top Stories
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover the latest news and insights from around the world, curated just for you.
          </p>
        </div>

        <TagFilter 
          tags={availableTags} 
          selectedTags={selectedTags} 
          onTagSelect={handleTagSelect} 
          onClearFilters={clearAllFilters} // Pass the new clear function
        />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.slice(0, visibleArticleCount).map((article, index) => (
              <ArticleCard key={article.url || index} article={article} index={index} /> // Use URL for key if available
            ))
          ) : (
            !loading && <p className="text-brutalist-text-secondary col-span-full text-center py-10">No articles match the selected tags.</p>
          )}
          {/* Load More Button */}
          {visibleArticleCount < filteredArticles.length && (
            <div className="col-span-full flex justify-center mt-8 mb-4">
              <button
                onClick={() => setVisibleArticleCount(prevCount => prevCount + 9)}
                className="font-bebas uppercase tracking-wider bg-brutalist-block-dark text-brutalist-text py-3 px-8 text-lg hover:bg-brutalist-accent-red hover:text-brutalist-background focus:outline-none focus-visible:ring-2 focus-visible:ring-brutalist-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-brutalist-background transition-colors duration-150 shadow-hard-sm hover:shadow-hard-accent-sm active:shadow-none active:transform active:translate-y-px"
              >
                Load More Articles
              </button>
            </div>
          )}
          {/* Discover Our Course CTA Button */}
          <div className="col-span-full flex justify-center mt-8 mb-8"> {/* Adjusted top margin if load more is present */}
            <button
              // onClick={() => { /* Define action, e.g., navigate to course page */ }}
              className="w-full font-bebas uppercase tracking-wider bg-brutalist-block-dark text-brutalist-text py-4 px-8 text-xl hover:bg-brutalist-accent-red hover:text-brutalist-background focus:outline-none focus-visible:ring-2 focus-visible:ring-brutalist-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-brutalist-background transition-colors duration-150 shadow-hard-md hover:shadow-hard-accent-md active:shadow-none active:transform active:translate-y-px"
            >
              Discover our course
            </button>
          </div>
        </div>
        
      </main>

      {/* Footer */}
      <footer className="bg-brutalist-block-dark text-brutalist-text mt-16 border-t-2 border-brutalist-accent-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-slate-400">
              © 2025 News Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
