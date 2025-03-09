import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const CountUp: React.FC<{ end: number; duration: number; suffix?: string }> = ({ 
  end, 
  duration, 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration * 60); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), end));
      
      if (start >= end) {
        clearInterval(timer);
      }
    }, 1000 / 60);
    
    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <CheckCircle size={24} className="text-primary-500" />,
      title: 'Proven Expertise',
      description: 'Our team consists of certified professionals with years of experience in various IT domains.',
    },
    {
      icon: <Users size={24} className="text-primary-500" />,
      title: 'Client-Centric Approach',
      description: 'We prioritize understanding your unique business needs to deliver tailored solutions.',
    },
    {
      icon: <Award size={24} className="text-primary-500" />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure reliable and robust solutions.',
    },
    {
      icon: <Clock size={24} className="text-primary-500" />,
      title: 'Timely Delivery',
      description: 'We value your time and consistently deliver projects within agreed timeframes.',
    },
  ];

  const stats = [
    { value: 50, suffix: '+', label: 'Satisfied Clients' },
    { value: 8, suffix: '+', label: 'Expert Team Members' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 2, suffix: '+', label: 'Years Experience' },
  ];

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

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-secondary-800 font-heading"
          >
            Why Choose <span className="text-primary-600">Us</span>
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
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-primary-50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-800 mb-2">{feature.title}</h3>
                  <p className="text-secondary-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="bg-primary-50 rounded-lg p-8 shadow-inner"
            >
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                      <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                    </div>
                    <p className="text-secondary-700">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 bg-white p-6 rounded-lg shadow-md border border-secondary-100"
            >
              <h3 className="text-xl font-semibold text-secondary-800 mb-4">Our Commitment</h3>
              <p className="text-secondary-600">
                At Matrix404, we're committed to delivering exceptional value through innovative solutions that address your specific challenges. Our goal is to be your trusted technology partner, helping you navigate the complexities of digital transformation with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;