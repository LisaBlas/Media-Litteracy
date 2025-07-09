import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-editorial-charcoal py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Column 1: Brand and Copyright */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-semibold text-editorial-cream">Media Literacy Tools</h3>
            <p className="font-sans text-editorial-cream mt-4">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-playfair font-semibold tracking-wider text-editorial-cream mb-4 text-xl">Navigate</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="font-mono text-editorial-cream hover:font-bold">About</a></li>
              <li><a href="/contact" className="font-mono text-editorial-cream hover:font-bold">Contact</a></li>
              <li><a href="/privacy" className="font-mono text-editorial-cream hover:font-bold">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="font-playfair font-semibold tracking-wider text-editorial-cream mb-4 text-xl">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="font-mono text-editorial-cream hover:font-bold">Twitter</a>
              <a href="#" className="font-mono text-editorial-cream hover:font-bold">LinkedIn</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
