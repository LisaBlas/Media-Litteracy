// Editorial Style ArticleCard Component
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, XMarkIcon, MagnifyingGlassIcon, ExclamationTriangleIcon, CheckCircleIcon, LinkIcon } from '@heroicons/react/24/solid';
import fallacyDefinitions from '../../data/fallacy-definitions.json';

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

const ArticleCard = ({ article, index, darkMode = false }) => {
  const [isHovered, setIsHovered] = useState(false);
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

  const handleRotate = (e) => {
    e.stopPropagation();
    setIsRotated(!isRotated);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.stopPropagation();
      e.preventDefault();
      setIsRotated(!isRotated);
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
        <motion.div
      className="relative w-full h-96 perspective-1000"
      ref={cardRef}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={!isRotated ? 'hover' : ''}
      custom={index}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isRotated ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 40, damping: 15 }} 
        onClick={handleRotate}
        onKeyDown={(e) => {
          e.stopPropagation();
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleRotate();
          }
        }}
        tabIndex={0}
        role="button"
        aria-pressed={isRotated}
        aria-label={`Read more about ${currentArticle.title}`}
      >
        {/* Editorial Front Face */}
        <div className={`w-full h-full border-2 border-slate-600 ${darkMode ? 'bg-slate-800 border-slate-600 text-slate-100' : 'bg-editorial-cream border-editorial-charcoal text-editorial-charcoal'} border-2 p-4 absolute editorial-front flex flex-col justify-between backface-hidden`}>
          <div>
            <div className={`border-b-2 ${darkMode ? 'border-orange-400' : 'border-editorial-orange'} pb-2 mb-3`}>
              <h2 className={`font-mono font-bold text-xs uppercase tracking-wider text-lg text-editorial-orange ${darkMode ? 'text-slate-100' : 'text-editorial-charcoal'}`}>{currentArticle.fallacy || 'FALLACY'}</h2>
            </div>
              
              <h3 className={`font-playfair font-bold text-xl leading-tight text-xl mb-2 ${darkMode ? 'text-slate-100' : 'text-editorial-charcoal'}`}>
                "{currentArticle.title}"
              </h3>
              <div className="space-y-2">
              <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-editorial-charcoal'} opacity-60 font-mono`}>
                <p>{currentArticle.source} // {formatDate(currentArticle.publishedAt)}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center self-end opacity-80">
            <p className="text-xs font-mono mr-2">REVEAL MORE</p>
            <motion.div 
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <EyeIcon className={`w-5 h-5 ${darkMode ? 'text-slate-400' : 'text-editorial-charcoal opacity-60'}`} />
            </motion.div>
          </div>
        </div>
        
        {/* Editorial Back Face */}
        <div className={`w-full h-full border-2 border-slate-600 ${darkMode ? 'bg-slate-700 text-slate-100' : 'bg-editorial-cream text-editorial-charcoal'} p-4 absolute overflow-y-auto custom-scrollbar editorial-back flex flex-col backface-hidden rotate-y-180`}>
          <button 
            onClick={handleRotate}
            className={`absolute top-3 right-3 ${darkMode ? 'text-slate-300 hover:text-orange-400' : 'text-editorial-cream hover:text-editorial-orange'}`}
            aria-label="Close details and flip back"
          >
            <XMarkIcon className="w-5 h-5 text-editorial-orange" />
          </button>
          
          {/* Top Section: Icon + Fallacy Name */}
          <div className={`absolute left-4 w-14 h-14 border-2 bg-editorial-orange ${darkMode ? 'border-orange-400' : 'border-editorial-orange'} flex items-center justify-center`}>
              <MagnifyingGlassIcon className={`${darkMode ? 'text-editorial cream' : 'text-editorial-cream'} w-10 h-10`} />
            </div>
          <div className="text-center pt-4 pb-2">
            <h5 className="font-mono uppercase font-bold text-lg text-editorial-orange mb-12">{currentArticle.fallacy}</h5>
          </div>

          {/* Content Wrapper */}
          <div className="flex-grow space-y-4 text-sm">
            {/* Definition Section */}
            {fallacyDefinition && (
              <div className="relative pl-4">
                <div className={`absolute left-0 top-0 h-full w-0.5 ${darkMode ? 'bg-slate-600' : 'border-editorial-orange border-opacity-20 border-2'}`} />
                <h6 className={`font-mono text-xs uppercase tracking-wider font-bold ${darkMode ? 'text-slate-400' : 'text-editorial-orange'} mb-1`}>Definition:</h6>
                <p className="leading-relaxed opacity-90 mb-6">{fallacyDefinition}</p>
              </div>
            )}

            {/* Analysis Section */}
            <div className="relative pl-4">
              <div className={`absolute left-0 top-0 h-full w-0.5 ${darkMode ? 'bg-slate-600' : 'border-editorial-orange border-opacity-20 border-2'}`} />
              <h6 className={`font-mono text-xs uppercase tracking-wider font-bold ${darkMode ? 'text-slate-400' : 'text-editorial-orange'} mb-1`}>Analysis of Headline:</h6>
              <p className="leading-relaxed opacity-90">
                {currentArticle.explanation}
                <a href={currentArticle.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center ml-2 text-editorial-orange underline hover:text-editorial-charcoal transition-colors duration-200">
                  <span className="mr-1">Read original article</span>
                  <LinkIcon className="w-4 h-4" />
                </a>
              </p>
            </div>

          </div>
          
          {/* Footer Link */}
          <div className="mt-auto pt-4">
            <a href={currentArticle.url} target="_blank" rel="noopener noreferrer" className={`block w-full text-center ${darkMode ? 'bg-orange-500 text-white hover:bg-orange-400' : 'border-2 border-editorial-orange text-editorial-orange hover:bg-editorial-orange hover:text-editorial-cream'} transition-colors duration-200 py-2 font-mono text-xs font-bold`}>
              Learn more in our course
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ArticleCard;