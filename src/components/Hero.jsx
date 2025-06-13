import { ShieldCheckIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  const scrollToCards = () => {
    const cardsSection = document.getElementById('headline-cards');
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-pattern py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
          <ShieldCheckIcon className="h-5 w-5 mr-2 text-green-400" />
          Defending Truth in Media
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Uncovering the <span className="text-orange-500">Narrative</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          We analyze today's headlines, exposing logical fallacies, biases, and misinformation. Your essential guide to critical thinking in our complex media landscape.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={scrollToCards}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            Explore Media Fallacies
          </button>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-gray-400 hover:bg-gray-700/50 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            Check our course
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
