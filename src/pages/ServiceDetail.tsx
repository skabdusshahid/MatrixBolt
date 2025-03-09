import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Code, Cloud, Shield, Cpu, BarChart3, Smartphone, Bot, Tv, Network, LineChart } from 'lucide-react';

interface ServiceDetailProps {
  serviceId: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId }) => {
  // Services data
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
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'AWS Mobile', 'Google Cloud'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      caseStudies: [
        {
          title: 'E-commerce Mobile App',
          description: 'Developed a feature-rich e-commerce application for a retail client that increased their mobile sales by 45% within three months of launch.',
          results: ['45% increase in mobile sales', '32% higher user engagement', '4.8/5 average app store rating']
        },
        {
          title: 'Healthcare Patient Portal',
          description: 'Created a secure patient portal app that allows users to schedule appointments, view medical records, and communicate with healthcare providers.',
          results: ['60% reduction in appointment scheduling calls', '85% patient satisfaction rate', 'Streamlined administrative processes']
        }
      ]
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
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'PHP', 'Python', 'WordPress', 'WooCommerce', 'Shopify', 'AWS', 'Google Cloud'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
      caseStudies: [
        {
          title: 'Corporate Website Redesign',
          description: 'Completely redesigned and rebuilt the website for a financial services firm, resulting in improved user experience and increased lead generation.',
          results: ['156% increase in lead generation', '42% decrease in bounce rate', '68% improvement in page load speed']
        },
        {
          title: 'E-commerce Platform',
          description: 'Developed a custom e-commerce solution for a specialty retailer with complex product configurations and inventory management requirements.',
          results: ['230% increase in online sales', 'Streamlined inventory management', 'Reduced cart abandonment by 35%']
        }
      ]
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
      technologies: ['Telegram Bot API', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS Lambda', 'Docker'],
      image: 'https://images.unsplash.com/photo-1611746869696-b0fcc35a0b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caseStudies: [
        {
          title: 'Customer Support Bot',
          description: 'Developed an AI-powered customer support bot for an e-commerce company that handles common inquiries and escalates complex issues to human agents.',
          results: ['75% reduction in support ticket volume', '24/7 customer support coverage', 'Average response time reduced to under 10 seconds']
        },
        {
          title: 'Order Management Bot',
          description: 'Created a Telegram bot for a food delivery service that allows customers to browse menus, place orders, and track deliveries.',
          results: ['28% increase in order volume', 'Improved customer satisfaction', 'Reduced operational costs']
        }
      ]
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
      technologies: ['Electron', 'Qt', 'C#/.NET', 'Java', 'Python', 'C++', 'SQLite', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2078&q=80',
      caseStudies: [
        {
          title: 'Inventory Management System',
          description: 'Developed a comprehensive inventory management application for a manufacturing company with multiple warehouses and complex supply chain requirements.',
          results: ['Inventory accuracy improved to 99.8%', 'Order fulfillment time reduced by 35%', 'Significant reduction in inventory carrying costs']
        },
        {
          title: 'Data Analysis Tool',
          description: 'Created a specialized data analysis application for a research institution that processes large datasets and generates visualizations and reports.',
          results: ['Data processing time reduced by 75%', 'Enhanced analytical capabilities', 'Improved research output quality']
        }
      ]
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
      technologies: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Keras', 'NLTK', 'OpenCV', 'Python', 'R', 'AWS SageMaker', 'Google AI Platform'],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caseStudies: [
        {
          title: 'Predictive Maintenance System',
          description: 'Implemented a machine learning solution for an industrial client that predicts equipment failures before they occur, enabling proactive maintenance.',
          results: ['85% accuracy in failure prediction', '62% reduction in unplanned downtime', 'Maintenance costs reduced by 40%']
        },
        {
          title: 'Customer Churn Prediction',
          description: 'Developed a predictive model for a subscription-based service that identifies customers at risk of cancellation, allowing for targeted retention efforts.',
          results: ['32% reduction in customer churn', 'Increased customer lifetime value', 'Improved ROI on retention campaigns']
        }
      ]
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
      technologies: ['Facebook Business Suite', 'Instagram Professional', 'Twitter Analytics', 'LinkedIn Marketing Solutions', 'TikTok for Business', 'Hootsuite', 'Buffer', 'Sprout Social', 'Canva', 'Adobe Creative Suite'],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      caseStudies: [
        {
          title: 'Brand Awareness Campaign',
          description: 'Executed a comprehensive social media campaign for a new product launch, significantly increasing brand awareness and engagement.',
          results: ['3.2 million impressions', '250% increase in social media engagement', '45% growth in follower base']
        },
        {
          title: 'Lead Generation Strategy',
          description: 'Developed and implemented a targeted social media lead generation strategy for a B2B service provider.',
          results: ['185% increase in qualified leads', '42% reduction in cost per lead', 'Improved lead quality and conversion rate']
        }
      ]
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
      technologies: ['Cisco', 'HP', 'Dell', 'Microsoft Server', 'VMware', 'AWS', 'Azure', 'Google Cloud', 'Fortinet', 'Ubiquiti'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80',
      caseStudies: [
        {
          title: 'Enterprise Network Overhaul',
          description: 'Redesigned and implemented a complete network infrastructure upgrade for a growing company with multiple office locations.',
          results: ['99.99% network uptime', '300% increase in network throughput', 'Enhanced security posture']
        },
        {
          title: 'Hybrid Cloud Migration',
          description: 'Planned and executed a migration from on-premises infrastructure to a hybrid cloud solution for a financial services firm.',
          results: ['45% reduction in IT operational costs', 'Improved disaster recovery capabilities', 'Enhanced scalability and flexibility']
        }
      ]
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
      technologies: ['HLS', 'MPEG-DASH', 'WebRTC', 'Node.js', 'React', 'FFmpeg', 'Wowza', 'AWS MediaLive', 'Google Cloud Media', 'CDN integration'],
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      caseStudies: [
        {
          title: 'Corporate IPTV Platform',
          description: 'Developed a custom IPTV solution for a multinational corporation to deliver internal communications and training content to offices worldwide.',
          results: ['Streamlined corporate communications', 'Reduced training costs by 55%', 'Increased employee engagement']
        },
        {
          title: 'Hospitality Entertainment System',
          description: 'Created an IPTV platform for a hotel chain that provides guests with access to live TV, on-demand content, and hotel services.',
          results: ['Enhanced guest experience', 'New revenue stream from premium content', 'Reduced hardware and maintenance costs']
        }
      ]
    },
  ];

  // Find the service by ID
  const service = services.find(s => s.id === serviceId);

  // If service not found, show error
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary-50">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-secondary-800 mb-4">Service Not Found</h2>
          <p className="text-secondary-600 mb-6">The service you're looking for doesn't exist.</p>
          <a 
            href="/"
            className="inline-flex items-center text-primary-600 font-medium"
          >
            <ArrowLeft size={18} className="mr-2" />
            <span>Back to Home</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8">
          <a 
            href="/"
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            <span>Back to Services</span>
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="relative h-64 md:h-96">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/40 to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mr-4">
                  {service.icon}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
              </div>
              <p className="text-primary-100 text-lg max-w-3xl">{service.description}</p>
            </div>
          </div>
          
          <div className="p-6 md:p-10">
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Overview</h2>
              <div className="text-secondary-600 space-y-4 whitespace-pre-line">
                {service.fullDescription}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-secondary-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Technologies We Use</h2>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-secondary-800 mb-4">Case Studies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.caseStudies.map((caseStudy, index) => (
                  <div key={index} className="bg-secondary-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-secondary-800 mb-3">{caseStudy.title}</h3>
                    <p className="text-secondary-600 mb-4">{caseStudy.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-primary-700">Results:</h4>
                      <ul className="space-y-1">
                        {caseStudy.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-secondary-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <h2 className="text-2xl font-semibold text-secondary-800 mb-6">Interested in our {service.title} service?</h2>
          <p className="text-secondary-600 mb-8">Fill out the form below and our team will get back to you to discuss how we can help with your specific needs.</p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="project-details" className="block text-sm font-medium text-secondary-700 mb-1">
                Project Details *
              </label>
              <textarea
                id="project-details"
                rows={4}
                className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                placeholder="Tell us about your project requirements and goals..."
                required
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-secondary-700 mb-1">
                Budget Range
              </label>
              <select
                id="budget"
                className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
              >
                <option value="">Select a budget range</option>
                <option value="less-than-5k">Less than $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="more-than-50k">More than $50,000</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-6 rounded-md transition-colors"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;