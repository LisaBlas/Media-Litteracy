import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-serif text-xl font-bold">Media Literacy Tools</h3>
            <p className="text-gray-400 mt-2">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-burgundy">About</a></li>
              <li><a href="/contact" className="hover:text-burgundy">Contact</a></li>
              <li><a href="/privacy" className="hover:text-burgundy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-burgundy">Twitter</a>
              <a href="#" className="hover:text-burgundy">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
