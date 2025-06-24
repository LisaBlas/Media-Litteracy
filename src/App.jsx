import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArticleCard from './components/ArticleCard';
import FilterSection from './components/FilterSection';
import CoursePage from './pages/CoursePage';
import headlinesData from '../data/headlines.json';
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/solid';

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

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
    setFilteredArticles(allArticles);
  }, [allArticles]);

  // Disable body scroll when mobile filter is open
  useEffect(() => {
    if (isMobileFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileFilterOpen]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-300 opacity-80">Loading articles...</p>
        </div>
      </div>
    );
  }

    return (
    <Routes>
      <Route path="/course" element={<CoursePage />} />
      <Route path="/" element={
        <div className="min-h-screen">
          <Navbar />
          <Hero />

          {/* Main Content */}
          <main id="fallacies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12 items-start">
              {/* Filter Section - Desktop */}
              <aside className="hidden md:block md:col-span-1">
                <h2 className="text-2xl font-bold mb-6">Filters</h2>
                <FilterSection headlines={allArticles} setFilteredHeadlines={setFilteredArticles} />
              </aside>

              {/* Articles Grid */}
              <div id="headline-cards" className="col-span-1 md:col-span-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article, index) => (
                    <ArticleCard key={`${article.url}-${index}`} article={article} index={index} />
                  ))
                ) : (
                  !loading && <p className="text-neon-cyan col-span-full text-center py-10">No articles match the selected filters.</p>
                )}
              </div>
            </div>
          </main>

          {/* Mobile Filter Button and Overlay */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="fixed bottom-6 right-6 bg-editorial-orange text-white p-4 rounded-full shadow-lg z-40"
              aria-label="Open filters"
            >
              <FunnelIcon className="h-6 w-6" />
            </button>

            {isMobileFilterOpen && (
              <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Filters</h2>
                  <button onClick={() => setIsMobileFilterOpen(false)} aria-label="Close filters">
                    <XMarkIcon className="h-8 w-8" />
                  </button>
                </div>
                <FilterSection headlines={allArticles} setFilteredHeadlines={setFilteredArticles} />
              </div>
            )}
          </div>

          {/* About Section */}
          <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">About Media Fallacies</h2>
            <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
              This project is dedicated to shedding light on the logical fallacies and cognitive biases prevalent in modern media. Our goal is to equip you with the critical thinking skills necessary to navigate the complex information landscape. By learning to identify these patterns, you can become a more discerning consumer of news and media.
            </p>
          </section>

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
      } />
    </Routes>
  );
}

export default App;
