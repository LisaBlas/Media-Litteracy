import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArticleCard from './components/ArticleCard';
import FilterSection from './components/FilterSection';
import CoursePage from './pages/CoursePage';
import headlinesData from '../data/headlines.json';

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
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
    setFilteredArticles(allArticles);
  }, [allArticles]);

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
    <Routes>
      <Route path="/course" element={<CoursePage />} />
      <Route path="/" element={
        <div className="min-h-screen">
          <Navbar />
          <Hero />

          {/* Main Content */}
          <main id="fallacies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <FilterSection headlines={allArticles} setFilteredHeadlines={setFilteredArticles} />

            {/* Articles Grid */}
            <div id="headline-cards" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article, index) => (
                  <ArticleCard key={`${article.url}-${index}`} article={article} index={index} />
                ))
              ) : (
                !loading && <p className="text-neon-cyan col-span-full text-center py-10">No articles match the selected filters.</p>
              )}
            </div>
            
          </main>

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
