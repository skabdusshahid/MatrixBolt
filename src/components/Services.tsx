import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Cloud, 
  Shield, 
  Cpu, 
  BarChart3, 
  Smartphone,
  Bot,
  Tv,
  Network,
  LineChart
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  id: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 h-full group"
    >
      <div className="p-6 flex flex-col h-full relative z-10">
        <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-secondary-800 mb-3">{title}</h3>
        <p className="text-secondary-600 flex-grow">{description}</p>
        <button 
          onClick={() => {
            window.history.pushState({}, '', `/services/${id}`);
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="mt-4 inline-flex items-center text-primary-600 font-medium group"
        >
          <span>Learn more</span>
          <svg
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/0 via-primary-500/0 to-primary-500/5 group-hover:to-primary-500/10 transition-all duration-500"></div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      id: "mobile-app",
      icon: <Smartphone size={28} className="text-primary-600" />,
      title: 'Mobile App Development',
      description: 'Custom Android and iOS applications tailored to your business needs with intuitive user interfaces.',
      fullDescription: `Our mobile app development service delivers custom, high-performance applications for iOS and Android platforms. We create intuitive, feature-rich mobile solutions that help businesses engage customers, streamline operations, and drive growth.

Our development process includes:

1. Comprehensive planning and requirement analysis
2. UI/UX design focused on user engagement
3. Native and cross-platform development options
4. Rigorous testing across multiple devices
5. Deployment and ongoing support

We specialize in developing various types of mobile applications including e-commerce apps, enterprise solutions, social networking platforms, and IoT-enabled applications.`,
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'UI/UX design and prototyping',
        'API integration and backend development',
        'App Store and Google Play deployment',
        'Performance optimization',
        'Ongoing maintenance and updates'
      ],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'AWS Mobile', 'Google Cloud']
    },
    {
      id: "web-development",
      icon: <Code size={28} className="text-primary-600" />,
      title: 'Web Development',
      description: 'Responsive and dynamic websites and web applications built with the latest technologies.',
      fullDescription: `Our web development service creates powerful, responsive, and user-friendly websites and web applications that drive business growth. We combine cutting-edge technologies with strategic design to deliver solutions that meet your specific business objectives.

Our web development process includes:

1. Strategic planning and requirement gathering
2. Information architecture and wireframing
3. Responsive design implementation
4. Front-end and back-end development
5. CMS integration and custom functionality
6. Thorough testing and quality assurance
7. Deployment and post-launch support

Whether you need a corporate website, e-commerce platform, custom web application, or portal, our team delivers solutions that are scalable, secure, and optimized for performance.`,
      features: [
        'Responsive web design',
        'Progressive Web Apps (PWAs)',
        'E-commerce solutions',
        'Content Management Systems',
        'Custom web applications',
        'API development and integration',
        'Performance optimization',
        'SEO-friendly architecture'
      ],
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'PHP', 'Python', 'WordPress', 'WooCommerce', 'Shopify', 'AWS', 'Google Cloud']
    },
    {
      id: "telegram-bot",
      icon: <Bot size={28} className="text-primary-600" />,
      title: 'Telegram Bot Development',
      description: 'Custom Telegram bots to automate tasks, enhance customer service, and streamline operations.',
      fullDescription: `Our Telegram bot development service creates intelligent, automated solutions that enhance communication, streamline operations, and improve customer engagement. We build custom bots that perform specific functions to meet your business needs.

Our bot development process includes:

1. Requirement analysis and use case definition
2. Bot architecture and workflow design
3. Development and integration with Telegram API
4. Integration with your existing systems and databases
5. Testing across various scenarios
6. Deployment and monitoring
7. Ongoing maintenance and updates

Our Telegram bots can handle customer support, automate notifications, process orders, collect feedback, deliver content, and much more.`,
      features: [
        'Custom command handling',
        'Natural language processing',
        'Media content management',
        'Payment integration',
        'User authentication',
        'Analytics and reporting',
        'Multi-language support',
        'Webhook integration'
      ],
      technologies: ['Telegram Bot API', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS Lambda', 'Docker']
    },
    {
      id: "desktop-apps",
      icon: <Cpu size={28} className="text-primary-600" />,
      title: 'Desktop Applications',
      description: 'Powerful desktop software solutions for Windows, macOS, and Linux platforms.',
      fullDescription: `Our desktop application development service creates powerful, efficient software solutions for Windows, macOS, and Linux platforms. We build custom desktop applications that automate processes, enhance productivity, and solve complex business challenges.

Our desktop development process includes:

1. Requirement gathering and analysis
2. UI/UX design tailored for desktop environments
3. Development using appropriate frameworks and technologies
4. Database integration and system connectivity
5. Comprehensive testing and quality assurance
6. Deployment and installation package creation
7. User training and documentation
8. Ongoing support and updates

We develop various types of desktop applications including business management software, data analysis tools, content creation applications, and specialized industry solutions.`,
      features: [
        'Cross-platform compatibility',
        'Offline functionality',
        'System integration capabilities',
        'Data synchronization',
        'Custom UI/UX design',
        'Advanced security features',
        'Automated updates',
        'Performance optimization'
      ],
      technologies: ['Electron', 'Qt', 'C#/.NET', 'Java', 'Python', 'C++', 'SQLite', 'PostgreSQL']
    },
    {
      id: "machine-learning",
      icon: <LineChart size={28} className="text-primary-600" />,
      title: 'Machine Learning',
      description: 'AI and machine learning models to analyze data, predict trends, and automate decision-making.',
      fullDescription: `Our machine learning service harnesses the power of artificial intelligence to transform your data into actionable insights and automated solutions. We develop custom ML models that analyze patterns, predict outcomes, and optimize processes for your business.

Our machine learning development process includes:

1. Data assessment and preparation
2. Feature engineering and selection
3. Model selection and algorithm development
4. Training and validation
5. Integration with existing systems
6. Deployment and monitoring
7. Continuous improvement and retraining

We apply machine learning to various business challenges including predictive analytics, recommendation systems, natural language processing, computer vision, anomaly detection, and process automation.`,
      features: [
        'Predictive analytics',
        'Natural Language Processing (NLP)',
        'Computer Vision',
        'Recommendation systems',
        'Anomaly detection',
        'Time series forecasting',
        'Sentiment analysis',
        'Automated decision-making'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Keras', 'NLTK', 'OpenCV', 'Python', 'R', 'AWS SageMaker', 'Google AI Platform']
    },
    {
      id: "social-marketing",
      icon: <BarChart3 size={28} className="text-primary-600" />,
      title: 'Social Marketing',
      description: 'Strategic social media marketing to boost your brand presence and engage with your audience.',
      fullDescription: `Our social marketing service develops comprehensive strategies to enhance your brand presence, engage your target audience, and drive measurable results through social media platforms. We create tailored approaches that align with your business objectives and audience preferences.

Our social marketing process includes:

1. Social media audit and competitive analysis
2. Strategy development and goal setting
3. Content planning and creation
4. Community management and engagement
5. Paid social advertising campaigns
6. Performance tracking and analytics
7. Ongoing optimization and reporting

We work across all major social platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube to create cohesive, multi-channel strategies that maximize your social media impact.`,
      features: [
        'Platform-specific strategy development',
        'Content creation and curation',
        'Community management',
        'Influencer marketing',
        'Paid social advertising',
        'Social listening and monitoring',
        'Analytics and reporting',
        'Crisis management'
      ],
      technologies: ['Facebook Business Suite', 'Instagram Professional', 'Twitter Analytics', 'LinkedIn Marketing Solutions', 'TikTok for Business', 'Hootsuite', 'Buffer', 'Sprout Social', 'Canva', 'Adobe Creative Suite']
    },
    {
      id: "hardware-networking",
      icon: <Network size={28} className="text-primary-600" />,
      title: 'Hardware & Networking',
      description: 'Comprehensive hardware solutions and network infrastructure setup and maintenance.',
      fullDescription: `Our hardware and networking service provides end-to-end solutions for designing, implementing, and maintaining robust IT infrastructure. We ensure your technology foundation is secure, reliable, and optimized for your business operations.

Our hardware and networking process includes:

1. Infrastructure assessment and needs analysis
2. Network design and architecture planning
3. Hardware selection and procurement
4. Implementation and configuration
5. Security implementation and testing
6. Documentation and knowledge transfer
7. Ongoing monitoring and maintenance
8. Scalability planning and upgrades

We handle various aspects of IT infrastructure including local area networks, wide area networks, wireless solutions, server setups, cloud integration, and security implementations.`,
      features: [
        'Network design and implementation',
        'Server setup and configuration',
        'Cloud infrastructure integration',
        'Wireless network solutions',
        'Network security implementation',
        'Hardware procurement and setup',
        'Disaster recovery planning',
        'Remote monitoring and management'
      ],
      technologies: ['Cisco', 'HP', 'Dell', 'Microsoft Server', 'VMware', 'AWS', 'Azure', 'Google Cloud', 'Fortinet', 'Ubiquiti']
    },
    {
      id: "iptv-services",
      icon: <Tv size={28} className="text-primary-600" />,
      title: 'IPTV Services',
      description: 'Custom IPTV solutions for streaming content across multiple devices and platforms.',
      fullDescription: `Our IPTV services provide comprehensive solutions for delivering television content over IP networks. We develop custom IPTV platforms that enable content streaming across multiple devices and platforms with high quality and reliability.

Our IPTV development process includes:

1. Requirements analysis and platform planning
2. Content management system development
3. Streaming server setup and configuration
4. User interface design and development
5. Multi-device compatibility implementation
6. Content protection and DRM integration
7. Testing across various devices and networks
8. Deployment and ongoing support

We create IPTV solutions for various applications including entertainment services, corporate communications, educational content delivery, and hospitality systems.`,
      features: [
        'Multi-device compatibility',
        'Live streaming capabilities',
        'Video-on-demand functionality',
        'Electronic program guide',
        'Content management system',
        'User authentication and management',
        'Analytics and reporting',
        'Content protection and DRM'
      ],
      technologies: ['HLS', 'MPEG-DASH', 'WebRTC', 'Node.js', 'React', 'FFmpeg', 'Wowza', 'AWS MediaLive', 'Google Cloud Media', 'CDN integration']
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-secondary-800 font-heading"
          >
            Our <span className="text-primary-600">Services</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary-500 mx-auto mt-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-secondary-600 max-w-2xl mx-auto"
          >
            We offer a comprehensive range of IT and consulting services to help your business thrive in the digital age.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
              id={service.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
export { type ServiceCardProps };