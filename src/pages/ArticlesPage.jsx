import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import FilterSection from '../components/FilterSection';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  if (loading) return <div className="text-center p-8 bg-editorial-cream">Loading articles...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">All Articles</h1>
      <FilterSection
        headlines={articles}
        setFilteredHeadlines={setFilteredArticles}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredArticles.map((article, index) => (
          <ArticleCard key={`${article.url}-${index}`} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
