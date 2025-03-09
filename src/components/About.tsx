import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cloud, Shield, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const timelineItems = [
    {
      year: '2024',
      title: 'Company Founded',
      description: 'Started as a small IT consulting firm with a vision to transform businesses.',
      icon: <Lightbulb size={24} className="text-primary-500" />,
    },
    {
      year: '2024',
      title: 'Expanded Services',
      description: 'Grew our team and expanded into mobile app development and machine learning.',
      icon: <Cloud size={24} className="text-primary-500" />,
    },
    {
      year: '2024',
      title: 'Client Growth',
      description: 'Reached milestone of 50+ satisfied clients across various industries.',
      icon: <Shield size={24} className="text-primary-500" />,
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Expanding our reach to international markets and enhancing our service portfolio.',
      icon: <Code size={24} className="text-primary-500" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-secondary-800 font-heading"
          >
            About <span className="text-primary-600">Us</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary-500 mx-auto mt-4"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <h3 className="text-2xl font-semibold text-secondary-800 mb-4">
              Transforming Businesses Through Technology
            </h3>
            <p className="text-secondary-600 mb-6">
              Matrix404 is a leading IT and business consulting firm dedicated to helping organizations navigate the complex digital landscape. Founded in 2024, we've quickly established ourselves as a trusted technology partner for businesses of all sizes.
            </p>
            <p className="text-secondary-600 mb-6">
              Our team of experts combines deep technical knowledge with business acumen to deliver solutions that drive real results. We believe in building long-term partnerships with our clients, understanding their unique challenges, and crafting tailored strategies for success.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-primary-50 px-4 py-2 rounded-md">
                <span className="font-semibold text-primary-700">2+ Years</span>
                <p className="text-sm text-secondary-600">Experience</p>
              </div>
              <div className="bg-primary-50 px-4 py-2 rounded-md">
                <span className="font-semibold text-primary-700">50+</span>
                <p className="text-sm text-secondary-600">Clients</p>
              </div>
              <div className="bg-primary-50 px-4 py-2 rounded-md">
                <span className="font-semibold text-primary-700">98%</span>
                <p className="text-sm text-secondary-600">Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-100"></div>
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-12 pb-8 last:pb-0"
              >
                <div className="absolute left-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center border-2 border-primary-200">
                  {item.icon}
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-secondary-100 hover:border-primary-300 hover:shadow-md transition-all duration-300">
                  <span className="text-sm font-semibold text-primary-600 block mb-1">{item.year}</span>
                  <h4 className="text-lg font-semibold text-secondary-800 mb-2">{item.title}</h4>
                  <p className="text-secondary-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;