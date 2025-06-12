// Editorial Style ArticleCard Component
import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon, MagnifyingGlassIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import fallacyDefinitions from '../../data/fallacy-definitions.json';

const ArticleCard = ({ article, index, darkMode = false }) => {
  const [isRotated, setIsRotated] = useState(false);
  const [fallacyDefinition, setFallacyDefinition] = useState('');
  const cardRef = useRef(null);

  const currentArticle = article || {
    title: 'Article Not Available',
    source: 'Unknown Source',
    image: '',
    content: 'No content to display.',
    url: '#',
    publishedAt: null,
    fallacy: 'N/A',
    explanation: 'No analysis available.',
    additionalBiases: []
  };

  const handleRotate = () => setIsRotated(!isRotated);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleRotate();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target) && isRotated) {
        setIsRotated(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    if (currentArticle.fallacy) {
      const definitionKey = Object.keys(fallacyDefinitions).find(
        key => key.toLowerCase() === currentArticle.fallacy.toLowerCase()
      );
      if (definitionKey) {
        setFallacyDefinition(fallacyDefinitions[definitionKey].definition);
      } else {
        setFallacyDefinition('');
      }
    } else {
      setFallacyDefinition('');
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isRotated, currentArticle.fallacy]);

  const formatDate = (dateString) => {
    if (!dateString) return 'Date N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).toUpperCase();
  };

  return (
    <div 
      className="relative w-full h-96 card-enter-animation article-card-wrapper"
      style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
      ref={cardRef}
    >
      <div 
        className={`rotate-card w-full h-full cursor-pointer ${isRotated ? 'rotated' : ''}`} 
        onClick={!isRotated ? handleRotate : undefined}
        onKeyDown={!isRotated ? handleKeyDown : undefined}
        tabIndex={0}
        role="button"
        aria-pressed={isRotated}
        aria-label={`Read more about ${currentArticle.title}`}
      >
        {/* Editorial Front Face */}
        <div className={`w-full h-full ${darkMode ? 'bg-slate-800 border-slate-600 text-slate-100' : 'bg-editorial-cream border-editorial-charcoal text-editorial-charcoal'} border-2 p-4 absolute editorial-front flex flex-col justify-between`}>
          <div>
            <div className={`absolute top-4 right-4 w-8 h-8 border-2 ${darkMode ? 'border-orange-400' : 'border-editorial-orange'} flex items-center justify-center`}>
              <MagnifyingGlassIcon className={`${darkMode ? 'text-orange-400' : 'text-editorial-orange'} w-4 h-4`} />
            </div>

            <div className={`border-b-2 ${darkMode ? 'border-orange-400' : 'border-editorial-orange'} pb-2 mb-3`}>
              <h2 className={`font-playfair font-bold text-lg ${darkMode ? 'text-slate-100' : 'text-editorial-charcoal'}`}>{currentArticle.fallacy || 'FALLACY'}</h2>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-editorial-charcoal'} opacity-60 font-mono`}>SOURCE: {currentArticle.source}</p>
            </div>
            
            <div className="space-y-2">
              <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-editorial-charcoal'} opacity-60 font-mono`}>
                {formatDate(currentArticle.publishedAt)}
              </div>
              
              <h3 className={`font-playfair font-bold text-lg leading-tight ${darkMode ? 'text-slate-100' : 'text-editorial-charcoal'}`}>
                "{currentArticle.title}"
              </h3>
            </div>
          </div>
          <p className="text-xs font-mono self-end">FLIP TO READ ANALYSIS →</p>
        </div>
        
        {/* Editorial Back Face */}
        <div className={`w-full h-full ${darkMode ? 'bg-slate-700 text-slate-100' : 'bg-editorial-cream text-editorial-charcoal'} p-4 absolute overflow-y-auto custom-scrollbar editorial-back flex flex-col`}>
          <button 
            onClick={(e) => { e.stopPropagation(); handleRotate(); }}
            className={`absolute top-3 right-3 ${darkMode ? 'text-slate-300 hover:text-orange-400' : 'text-editorial-cream hover:text-editorial-orange'}`}
            aria-label="Close details and flip back"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
          
          {/* Top Section: Icon + Fallacy Name */}
          <div className="text-center pt-4 pb-2">
            <ExclamationTriangleIcon className={`w-10 h-10 ${darkMode ? 'text-orange-400' : 'text-editorial-orange'} mx-auto mb-2`} />
            <h5 className="font-playfair font-bold text-xl">{currentArticle.fallacy}</h5>
          </div>

          <hr className={`my-4 ${darkMode ? 'border-slate-600' : 'border-editorial-charcoal border-opacity-20'}`} />

          {/* Content Wrapper */}
          <div className="flex-grow space-y-4 text-sm">
            {/* Definition Section */}
            {fallacyDefinition && (
              <div>
                <h6 className={`font-mono text-xs uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-editorial-charcoal opacity-70'} mb-2`}>Definition</h6>
                <p className="leading-relaxed opacity-90 italic">"{fallacyDefinition}"</p>
              </div>
            )}

            {/* Analysis Section */}
            <div>
              <h6 className={`font-mono text-xs uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-editorial-charcoal opacity-70'} mb-2`}>Analysis of Headline</h6>
              <p className="leading-relaxed opacity-90">{currentArticle.explanation}</p>
            </div>

            {/* Quick Insights Section */}
            {currentArticle.additionalBiases && currentArticle.additionalBiases.length > 0 && (
              <div>
                <h6 className={`font-mono text-xs uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-editorial-charcoal opacity-70'} mb-2`}>Quick Insights</h6>
                <ul className="space-y-2">
                  {currentArticle.additionalBiases.slice(0, 3).map((bias, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className={`w-4 h-4 ${darkMode ? 'text-orange-400' : 'text-editorial-orange'} mr-2 mt-1 flex-shrink-0`} />
                      <span>{bias}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Footer Link */}
          <div className="mt-auto pt-4">
            <a href={currentArticle.url} target="_blank" rel="noopener noreferrer" className={`block w-full text-center ${darkMode ? 'bg-orange-500 text-slate-900 hover:bg-orange-400' : 'bg-editorial-orange text-editorial-charcoal hover:bg-opacity-90'} py-2 font-playfair font-bold transition-opacity`}>
              Read Original Article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;