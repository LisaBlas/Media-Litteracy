import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This tool has completely changed how I read the news. I can now spot fallacies I never knew existed.",
      author: "Alex Johnson, Journalist"
    },
    {
      quote: "An essential resource for any student of media or journalism. The course is brilliant.",
      author: "Dr. Maria Garcia, University Professor"
    },
    {
      quote: "Finally, a practical way to fight misinformation. I recommend it to everyone.",
      author: "Samuel Chen, Tech Blogger"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center bg-editorial-cream py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-800 text-center mb-20">What People Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
              <p className="font-serif text-xl italic text-gray-700 mb-6 flex-grow">“{testimonial.quote}”</p>
              <p className="font-sans font-semibold text-gray-800 text-right">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
