import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon, LightBulbIcon } from '@heroicons/react/24/solid'; // Example icon for bias
import AccordionItem from './AccordionItem';

const ArticleCard = ({ article, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  const handleFlip = (e) => {
    // Prevent event bubbling if the click is on an interactive element inside the card back
    if (e && e.target.closest('a, button:not(.card-face)')) {
        if(isFlipped && !e.target.closest('.close-button-back')) return;
    }
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleFlip();
    }
  };

 useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target) && isFlipped) {
        setIsFlipped(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFlipped]);

  const formatDate = (dateString) => {
    if (!dateString) return 'Date N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const truncateContent = (content, maxLength = 100) => {
    if (!content || typeof content !== 'string' || content.length <= maxLength) return content || '';
    return content.substring(0, maxLength).trim() + '...';
  };

  // Fallback for missing article data
  const currentArticle = article || {
    title: 'Article Not Available',
    source: 'Unknown Source',
    image: '', // Provide a path to a default placeholder image if desired
    content: 'No content to display.',
    url: '#',
    publishedAt: null,
    biasType: 'N/A', // Placeholder for bias/fallacy data
  };

  return (
    <div className="card-container-perspective w-full h-full"> {/* Ensure h-full if cards have varying heights set by grid row */} 
      <div
        ref={cardRef}
        className="article-card-wrapper w-full h-full min-h-[480px]"
        onClick={!isFlipped ? handleFlip : undefined} 
        onKeyDown={!isFlipped ? handleKeyDown : undefined}
        tabIndex={0}
        role="button"
        aria-pressed={isFlipped}
        aria-label={`Read more about ${currentArticle.title}`}
      >
        <div className={`card-inner ${isFlipped ? 'is-flipped' : ''} w-full h-full`}>
          {/* Front Face */}
          <div className="card-face card-front textured-dark-gradient p-5 sm:p-6 flex flex-col justify-between text-brutalist-text">
            <div className="flex-grow">
              {currentArticle.image && (
                <div className={`relative h-40 sm:h-48 mb-4 overflow-hidden image-vignette image-diagonal-overlay border-2 border-brutalist-block-dark ${index % 2 !== 0 ? 'alt-overlay-direction' : ''}`}>
                  <img
                    src={currentArticle.image}
                    alt={currentArticle.title}
                    className="w-full h-full object-cover brutalist-image-filter opacity-80"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found'; }} // Fallback image
                  />
                </div>
              )}
              <span className="text-xs text-brutalist-text opacity-80 italic">
                {currentArticle.source} - {formatDate(currentArticle.publishedAt)}
              </span>
              <h3 className="font-bebas text-brutalist-text font-black uppercase tracking-wider text-2xl sm:text-3xl mb-2 leading-tight border-b-2 border-brutalist-accent-red pb-1">
                {currentArticle.title}
              </h3>
            </div>
          </div>

          {/* Back Face */}
          <div className="card-face card-back p-5 sm:p-6 flex flex-col text-brutalist-text overflow-y-auto brutalist-scrollbar">
            <button
              onClick={handleFlip} 
              className="close-button-back absolute top-3 right-3 text-brutalist-text opacity-70 hover:text-brutalist-accent-red focus-visible:ring-2 focus-visible:ring-brutalist-accent-red focus-visible:ring-offset-2 focus-visible:ring-offset-brutalist-block-dark z-20 p-1"
              aria-label="Close details and flip back"
            >
              <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <div className="flex-grow">
              <div className="mb-4">
                {/* Placeholder for a potential back-face main title - styled for Brutalism */}
                {/* <h4 className="font-bebas text-slate-50 font-black uppercase tracking-tight text-xl sm:text-2xl mb-3">Back Face Title</h4> */}
                <img src="Images/animated.gif" alt="Brain" className="w-40 h-40 mb-3" />
                <h3 className="font-bebas text-brutalist-text font-black uppercase tracking-wider text-2xl sm:text-3xl mb-2 leading-tight border-b-2 border-brutalist-accent-red pb-1">
                Strawman Fallacy
              </h3>
                {currentArticle.biasType && currentArticle.biasType !== 'N/A' && (
                  <div className="mb-3">
                    <LightBulbIcon className="w-6 h-6 text-brutalist-accent-red animate-pulse" aria-label={`Bias detected: ${currentArticle.biasType}`} />
                  </div>
                )}
                <div>
                  <p>The article suggests the ban is "fundamentally racist" without fully exploring the administration's stated reasons, such as national security, which may misrepresent the policy's intent.</p>
                </div>
              </div>
              <p className="text-sm text-brutalist-text opacity-90 mb-4 leading-relaxed">
                {truncateContent(currentArticle.content, 120)}
              </p>
              <div className="space-y-1 mb-3">
                <AccordionItem title="More flaws">
                  <p>• Appeal to Emotion: The use of terms like "demonized" and "vilifying" appeals to readers' emotions rather than presenting a balanced analysis of the policy's implications.</p>
                  <p className="mt-2">• Hasty Generalization: The article implies that the ban is racist based on the inclusion of non-white countries, without considering the specific criteria used for the ban.</p>
                  <p className="mt-2">Further points could be listed here.</p>
                </AccordionItem>
                <AccordionItem title="More context">
                  <p>1. The travel ban could be seen as a legitimate national security measure, focusing on countries with inadequate vetting processes, which is a common practice in international relations.</p>
                  <p className="mt-2">2. The inclusion of non-Muslim-majority countries suggests the ban is not solely based on religion, challenging the narrative of it being a "Muslim ban."</p>
                  <p className="mt-2">3. The policy might be viewed as a temporary measure to address specific security concerns, rather than a permanent exclusion, which could mitigate claims of racism.</p>
                  <p className="mt-2">4. The ban's impact on African countries could be interpreted as a reflection of broader geopolitical dynamics rather than an intentional act of exclusion.</p>
                </AccordionItem>
                <AccordionItem title="More on the source">
                  <p>Source: <a href={currentArticle.url} target="_blank" rel="noopener noreferrer" className="text-brutalist-accent-red hover:text-brutalist-text focus-visible:text-brutalist-text underline">{currentArticle.source}</a>. Reliability score: N/A. Publication date: {formatDate(currentArticle.publishedAt)}. The Guardian is a reputable, progressive-leaning news outlet with nonprofit ownership aiming for editorial independence, praised for investigative work but viewed as politically left-leaning with occasional critique over bias framing.</p>
                </AccordionItem>
              </div>
            </div>
            <div className="mt-auto pt-2">
              <a
                href={currentArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2.5 bg-brutalist-accent-red text-brutalist-text text-sm font-bold border-2 border-brutalist-accent-red cta-glow-button hover:bg-brutalist-text hover:text-brutalist-accent-red hover:shadow-hard-sm focus-visible:bg-brutalist-text focus-visible:text-brutalist-accent-red focus-visible:shadow-hard-sm"
              >
                Learn more in our course
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;