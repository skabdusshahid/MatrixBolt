import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronUp, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold font-heading flex items-center"
              >
                <Code size={28} className={`mr-2 ${scrolled ? 'text-primary-700' : 'text-white'}`} />
                <span className={`${scrolled ? 'text-primary-700' : 'text-white'}`}>Matrix</span>
                <span className={`${scrolled ? 'text-secondary-800' : 'text-primary-200'}`}>404</span>
              </motion.div>
            </div>

            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'why-us', 'team', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-medium transition-colors ${
                    scrolled ? 'text-secondary-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
                  }`}
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                </motion.button>
              ))}
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md ${
                  scrolled ? 'text-secondary-800' : 'text-white'
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-5 space-y-3">
              {['home', 'about', 'services', 'why-us', 'team', 'contact'].map((item) => (
                <button
                  key={item}
                  className="block w-full text-left px-3 py-2 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 rounded-md"
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary-600 text-white p-3 rounded-full shadow-lg z-50"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </>
  );
};

export default Navbar;