import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 to-primary-900/80"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-6"
          >
            <Code size={40} className="text-primary-300 mr-3" />
            <h2 className="text-3xl font-bold text-white font-heading">
              <span className="text-white">Matrix</span>
              <span className="text-primary-300">404</span>
            </h2>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading leading-tight"
          >
            Empowering Your Business with Cutting-Edge IT Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-primary-100 max-w-2xl"
          >
            We help businesses transform, innovate, and thrive in the digital era with our expert IT services and strategic consulting solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-md font-medium flex items-center space-x-2 transition-colors"
              onClick={scrollToContact}
            >
              <span>Get Started</span>
              <ArrowRight size={18} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-[10%] w-16 h-16 bg-primary-500/20 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-[15%] w-24 h-24 bg-primary-400/10 rounded-full"
          animate={{ 
            y: [0, 40, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-[30%] w-12 h-12 bg-white/10 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Hero;