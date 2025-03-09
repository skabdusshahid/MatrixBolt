import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  ArrowRight,
  Code
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="text-2xl font-bold font-heading flex items-center">
                <Code size={24} className="text-primary-400 mr-2" />
                <span className="text-primary-400">Matrix</span>
                <span className="text-white">404</span>
              </div>
            </motion.div>
            <p className="text-secondary-300 mb-6">
              Empowering businesses with cutting-edge IT solutions and strategic consulting to drive growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-secondary-700 hover:bg-primary-600 p-2 rounded-full transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-secondary-700 hover:bg-primary-600 p-2 rounded-full transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-secondary-700 hover:bg-primary-600 p-2 rounded-full transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-secondary-700 hover:bg-primary-600 p-2 rounded-full transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Why Choose Us', id: 'why-us' },
                { name: 'Our Team', id: 'team' },
                { name: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-secondary-300 hover:text-primary-300 transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Mobile App Development',
                'Web Development',
                'Telegram Bot Development',
                'Desktop Applications',
                'Machine Learning',
                'Social Marketing',
                'Hardware & Networking',
                'IPTV Services',
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-secondary-300 hover:text-primary-300 transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
            <p className="text-secondary-300 mb-4">
              Subscribe to our newsletter to receive updates and insights.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-secondary-700 border border-secondary-600 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors text-white"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="border-t border-secondary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              &copy; {new Date().getFullYear()} Matrix404. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-secondary-400 hover:text-primary-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-300 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;