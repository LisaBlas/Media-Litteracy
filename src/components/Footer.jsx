import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-editorial-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Column 1: Brand and Copyright */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-semibold text-gray-800">Media Literacy Tools</h3>
            <p className="font-sans text-gray-500 mt-4">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-sans font-semibold uppercase tracking-wider text-gray-500 mb-4">Navigate</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="font-sans text-gray-700 hover:text-burgundy transition-colors">About</a></li>
              <li><a href="/contact" className="font-sans text-gray-700 hover:text-burgundy transition-colors">Contact</a></li>
              <li><a href="/privacy" className="font-sans text-gray-700 hover:text-burgundy transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="font-sans font-semibold uppercase tracking-wider text-gray-500 mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="font-sans text-gray-700 hover:text-burgundy transition-colors">Twitter</a>
              <a href="#" className="font-sans text-gray-700 hover:text-burgundy transition-colors">LinkedIn</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
