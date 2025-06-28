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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <p className="font-serif text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</p>
              <p className="font-bold text-gray-800">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
