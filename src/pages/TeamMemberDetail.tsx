import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Linkedin, Github, Twitter, CheckCircle, Calendar, GraduationCap, Award, Briefcase } from 'lucide-react';

interface TeamMemberDetailProps {
  memberId: string;
}

const TeamMemberDetail: React.FC<TeamMemberDetailProps> = ({ memberId }) => {
  // Team members data
  const teamMembers = [
    {
      id: "shahid",
      name: 'Sk Abdus Shahid',
      role: 'MD, CTO, Developer',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEwAXS3dFgGgQ/profile-displayphoto-shrink_200_200/B56ZRFmqCvGsAY-/0/1736334550241?e=2147483647&v=beta&t=g-cFnIrm0cDVzIruw5rHue77UZtjBAfTT6WW0FUHD2s',
      linkedin: '#',
      github: '#',
      email: 'shahid@flintdeorient.com',
      experience: '2+ years',
      bio: 'Sk Abdus Shahid is the Managing Director and CTO of Matrix404. With over 8 years of experience in software development, he specializes in building scalable web applications and mobile solutions. He has led numerous successful projects across various industries.',
      education: 'Master of Computer Application, Maulana Abul Kalam Azad University of Technology',
      skills: ['Full Stack Development', 'System Architecture', 'Project Management', 'Mobile App Development', 'Cloud Infrastructure'],
      projects: [
        {
          name: 'Enterprise Resource Planning System',
          description: 'Led the development of a comprehensive ERP system for a manufacturing company that streamlined operations and increased efficiency by 35%.'
        },
        {
          name: 'E-commerce Platform',
          description: 'Architected and developed a scalable e-commerce platform handling over 10,000 daily transactions with 99.9% uptime.'
        },
        {
          name: 'Mobile Banking Application',
          description: 'Designed and implemented a secure mobile banking application with biometric authentication and real-time transaction processing.'
        }
      ],
      achievements: [
        'Led a team of 15 developers across multiple projects',
        'Reduced system downtime by 75% through infrastructure optimization',
        'Implemented CI/CD pipelines that decreased deployment time by 60%'
      ]
    },
    {
      id: "julhas",
      name: 'Julhas Sk',
      role: 'CEO, Lead Developer',
      image: 'https://assets.datacamp.com/users/avatars/005/097/099/medium/unnamed.jpg?1574782759',
      linkedin: '#',
      github: '#',
      email: 'julhas@matrix404.com',
      experience: '2+ years',
      bio: 'Julhas Sk is the CEO and Lead Developer at Matrix404. He brings 7+ years of expertise in software engineering and business strategy. His vision drives the company\'s innovation and growth, ensuring clients receive cutting-edge solutions.',
      education: 'M.Tech in Information Technology, Kalyani Government Engineering College',
      skills: ['Business Strategy', 'Web Development', 'UI/UX Design', 'Team Leadership', 'Client Relations'],
      projects: [
        {
          name: 'Healthcare Management System',
          description: 'Developed an integrated healthcare management system for a network of hospitals, improving patient care coordination by 45%.'
        },
        {
          name: 'Smart City Initiative',
          description: 'Led a team in developing IoT-based smart city solutions for traffic management and public utilities monitoring.'
        },
        {
          name: 'Financial Analytics Platform',
          description: 'Created a data analytics platform for financial institutions that provides real-time insights and predictive modeling.'
        }
      ],
      achievements: [
        'Grew company revenue by 200% in the first two years',
        'Established partnerships with 3 Fortune 500 companies',
        'Recognized as "Emerging Tech Leader" by Tech Association of India'
      ]
    },
    {
      id: "salman",
      name: 'Salman Mondal',
      role: 'Developer',
      image: 'https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/481178239_3978138249131482_4413404952330766063_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JDG11bBhyuMQ7kNvgEGCGna&_nc_oc=AdgBE3WH_-vM0xiH_SrCwJwy-Z-l9RMrcAcz0CtDAQiW6YVlo65MgWC6Q-X-WhDNOdo&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=ASdu3innt2rfouGA4kA6JfL&oh=00_AYDmS6ARsdC6t9dIzqok1TiCEd11LQO96i747RBtuJ8vxg&oe=67CCD96A',
      linkedin: '#',
      github: '#',
      email: 'salman@matrix404.com',
      experience: '1+ years',
      bio: 'Salman Mondal is a skilled developer with 5+ years of experience in creating robust applications. He specializes in backend development and database optimization, ensuring our solutions are performant and scalable.',
      education: 'Master of Computer Application, Kalyani Government Engineering College',
      skills: ['Backend Development', 'Database Design', 'API Development', 'Performance Optimization', 'DevOps'],
      projects: [
        {
          name: 'Inventory Management System',
          description: 'Designed and implemented a real-time inventory management system with advanced forecasting capabilities.'
        },
        {
          name: 'Payment Gateway Integration',
          description: 'Developed secure payment processing solutions for e-commerce platforms with multi-currency support.'
        },
        {
          name: 'Data Migration Framework',
          description: 'Created a robust framework for seamless data migration between legacy systems and modern platforms.'
        }
      ],
      achievements: [
        'Optimized database performance resulting in 40% faster query response times',
        'Contributed to open-source projects with over 500 stars on GitHub',
        'Developed a microservices architecture that improved system scalability'
      ]
    },
    {
      id: "azmaail",
      name: 'Sk Azmaail',
      role: 'Developer',
      image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      linkedin: '#',
      github: '#',
      email: 'azmaail@matrix404.com',
      experience: '1+ years',
      bio: 'Sk Azmaail is a talented developer with 4+ years of experience in frontend and mobile application development. He creates intuitive and responsive user interfaces that enhance user experience and drive engagement.',
      education: 'M.Tech in Computer Science, Govt. College of Engineering and ceramic technology',
      skills: ['Frontend Development', 'Mobile Development', 'UI/UX Implementation', 'Cross-platform Solutions', 'Performance Optimization'],
      projects: [
        {
          name: 'E-learning Platform',
          description: 'Developed the frontend for an interactive e-learning platform with real-time collaboration features.'
        },
        {
          name: 'Fitness Tracking App',
          description: 'Created a cross-platform mobile application for fitness tracking with personalized workout recommendations.'
        },
        {
          name: 'Restaurant Ordering System',
          description: 'Built a user-friendly digital ordering system for restaurants that increased order accuracy by 28%.'
        }
      ],
      achievements: [
        'Reduced app load time by 60% through code optimization',
        'Designed UI components used across 12 different projects',
        'Implemented accessibility features that increased user engagement by 25%'
      ]
    },
    {
      id: "samim",
      name: 'Samim Seikh',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      linkedin: '#',
      twitter: '#',
      email: 'samim@matrix404.com',
      experience: '2+ years',
      bio: 'Samim Seikh leads our marketing efforts with 6+ years of experience in digital marketing and brand strategy. He develops comprehensive marketing campaigns that increase brand visibility and drive client acquisition.',
      education: 'MBA in Marketing, Indian Institute of Management',
      skills: ['Digital Marketing', 'Social Media Strategy', 'Content Marketing', 'SEO/SEM', 'Brand Development'],
      projects: [
        {
          name: 'Product Launch Campaign',
          description: 'Orchestrated a successful product launch campaign that generated 150% more leads than projected.'
        },
        {
          name: 'Brand Repositioning',
          description: 'Led a comprehensive brand repositioning effort that resulted in 35% increased market share.'
        },
        {
          name: 'Digital Marketing Strategy',
          description: 'Developed and implemented a digital marketing strategy that reduced customer acquisition costs by 42%.'
        }
      ],
      achievements: [
        'Increased social media engagement by 300% in 6 months',
        'Reduced customer acquisition cost by 45% through targeted campaigns',
        'Developed content strategy that generated 10,000+ monthly website visitors'
      ]
    },
    {
      id: "imtiaz",
      name: 'Sk Imtiazuddin',
      role: 'Graphic Designer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      linkedin: '#',
      twitter: '#',
      email: 'imtiaz@matrix404.com',
      experience: '5+ years',
      bio: 'Sk Imtiazuddin is our creative graphic designer with 5+ years of experience in visual design and branding. He creates compelling visual assets that communicate our clients\' brand messages effectively and memorably.',
      education: 'BFA in Graphic Design, National Institute of Design',
      skills: ['Graphic Design', 'UI Design', 'Brand Identity', 'Motion Graphics', 'Print Design'],
      projects: [
        {
          name: 'Corporate Identity Redesign',
          description: 'Redesigned the complete corporate identity for a financial services firm, increasing brand recognition by 40%.'
        },
        {
          name: 'Marketing Collateral Design',
          description: 'Created a cohesive set of marketing materials that helped secure three major client contracts.'
        },
        {
          name: 'UI Design System',
          description: 'Developed a comprehensive UI design system that improved design consistency and development efficiency.'
        }
      ],
      achievements: [
        'Won 3 design awards for client branding projects',
        'Created visual identity systems for 20+ companies',
        'Developed design system that reduced production time by 35%'
      ]
    },
  ];

  // Find the team member by ID
  const member = teamMembers.find(m => m.id === memberId);

  // If member not found, show error
  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary-50">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-secondary-800 mb-4">Team Member Not Found</h2>
          <p className="text-secondary-600 mb-6">The team member you're looking for doesn't exist.</p>
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
            <span>Back to Team</span>
          </a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-12"
        >
          <div className="md:flex">
            <div className="md:w-1/3">
              <div className="relative h-80 md:h-full">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/40 to-transparent opacity-0 md:opacity-60"></div>
              </div>
            </div>
            <div className="md:w-2/3 p-6 md:p-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-2">{member.name}</h1>
                <p className="text-primary-600 text-xl mb-4">{member.role}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex space-x-4 mb-6"
              >
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-100 p-2 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <Linkedin size={20} className="text-secondary-700" />
                  </a>
                )}
                {member.github && (
                  <a 
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-100 p-2 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <Github size={20} className="text-secondary-700" />
                  </a>
                )}
                {member.twitter && (
                  <a 
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-100 p-2 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <Twitter size={20} className="text-secondary-700" />
                  </a>
                )}
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`}
                    className="bg-secondary-100 p-2 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <Mail size={20} className="text-secondary-700" />
                  </a>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-6"
              >
                <h2 className="text-xl font-semibold text-secondary-800 mb-2">About</h2>
                <p className="text-secondary-600">{member.bio}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
              >
                <div className="flex items-center">
                  <div className="mr-3 bg-primary-50 p-2 rounded-full">
                    <Briefcase size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-800">Experience</h3>
                    <p className="text-secondary-600">{member.experience}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 bg-primary-50 p-2 rounded-full">
                    <GraduationCap size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-800">Education</h3>
                    <p className="text-secondary-600">{member.education}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-6"
              >
                <h2 className="text-xl font-semibold text-secondary-800 mb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-6 md:p-8"
          >
            <h2 className="text-2xl font-semibold text-secondary-800 mb-6 flex items-center">
              <Briefcase size={24} className="text-primary-500 mr-2" />
              Notable Projects
            </h2>
            <div className="space-y-6">
              {member.projects.map((project, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="border-b border-secondary-100 last:border-0 pb-4 last:pb-0"
                >
                  <h3 className="text-lg font-medium text-secondary-800 mb-2">{project.name}</h3>
                  <p className="text-secondary-600">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-6 md:p-8"
          >
            <h2 className="text-2xl font-semibold text-secondary-800 mb-6 flex items-center">
              <Award size={24} className="text-primary-500 mr-2" />
              Achievements
            </h2>
            <div className="space-y-4">
              {member.achievements?.map((achievement, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start"
                >
                  <CheckCircle size={18} className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-secondary-600">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-6 md:p-8"
        >
          <h2 className="text-2xl font-semibold text-secondary-800 mb-6 flex items-center">
            <Mail size={24} className="text-primary-500 mr-2" />
            Contact {member.name}
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                  Your Name *
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
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-6 rounded-md transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;