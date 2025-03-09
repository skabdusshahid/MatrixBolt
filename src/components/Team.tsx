import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Mail, Github } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  email?: string;
  delay: number;
  id: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  linkedin,
  twitter,
  github,
  email,
  delay,
  id,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCardClick = () => {
    window.history.pushState({}, '', `/team/${id}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="group h-full"
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="relative overflow-hidden rounded-lg shadow-md bg-white h-full flex flex-col">
        <div className="aspect-w-3 aspect-h-4 overflow-hidden" style={{ height: "280px" }}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex space-x-3 justify-center">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-2 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-2 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Twitter size={18} />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-2 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Github size={18} />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="bg-white/20 p-2 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Mail size={18} />
              </a>
            )}
          </div>
        </motion.div>
        
        <div className="p-4 text-center flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-secondary-800">{name}</h3>
            <p className="text-primary-600">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: "shahid",
      name: 'Sk Abdus Shahid',
      role: 'MD, CTO, Developer',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEwAXS3dFgGgQ/profile-displayphoto-shrink_200_200/B56ZRFmqCvGsAY-/0/1736334550241?e=2147483647&v=beta&t=g-cFnIrm0cDVzIruw5rHue77UZtjBAfTT6WW0FUHD2s',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'shahid@matrix404.com',
      experience: '8+ years',
      bio: 'Sk Abdus Shahid is the Managing Director and CTO of Matrix404. With over 8 years of experience in software development, he specializes in building scalable web applications and mobile solutions. He has led numerous successful projects across various industries.',
      skills: ['Full Stack Development', 'System Architecture', 'Project Management', 'Mobile App Development', 'Cloud Infrastructure']
    },
    {
      id: "julhas",
      name: 'Julhas Sk',
      role: 'CEO, Lead Developer',
      image: 'https://assets.datacamp.com/users/avatars/005/097/099/medium/unnamed.jpg?1574782759',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'julhas@matrix404.com',
      experience: '7+ years',
      bio: 'Julhas Sk is the CEO and Lead Developer at Matrix404. He brings 7+ years of expertise in software engineering and business strategy. His vision drives the company\'s innovation and growth, ensuring clients receive cutting-edge solutions.',
      skills: ['Business Strategy', 'Web Development', 'UI/UX Design', 'Team Leadership', 'Client Relations']
    },
    {
      id: "salman",
      name: 'Salman Mondal',
      role: 'Developer',
      image: 'https://scontent.fccu5-1.fna.fbcdn.net/v/t39.30808-6/481178239_3978138249131482_4413404952330766063_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=JDG11bBhyuMQ7kNvgEGCGna&_nc_oc=AdgBE3WH_-vM0xiH_SrCwJwy-Z-l9RMrcAcz0CtDAQiW6YVlo65MgWC6Q-X-WhDNOdo&_nc_zt=23&_nc_ht=scontent.fccu5-1.fna&_nc_gid=ASdu3innt2rfouGA4kA6JfL&oh=00_AYDmS6ARsdC6t9dIzqok1TiCEd11LQO96i747RBtuJ8vxg&oe=67CCD96A',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'salman@matrix404.com',
      experience: '5+ years',
      bio: 'Salman Mondal is a skilled developer with 5+ years of experience in creating robust applications. He specializes in backend development and database optimization, ensuring our solutions are performant and scalable.',
      skills: ['Backend Development', 'Database Design', 'API Development', 'Performance Optimization', 'DevOps']
    },
    {
      id: "azmaail",
      name: 'Sk Azmaail',
      role: 'Developer',
      image: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'azmaail@matrix404.com',
      experience: '4+ years',
      bio: 'Sk Azmaail is a talented developer with 4+ years of experience in frontend and mobile application development. He creates intuitive and responsive user interfaces that enhance user experience and drive engagement.',
      skills: ['Frontend Development', 'Mobile Development', 'UI/UX Implementation', 'Cross-platform Solutions', 'Performance Optimization']
    },
    {
      id: "samim",
      name: 'Samim Seikh',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'samim@matrix404.com',
      experience: '6+ years',
      bio: 'Samim Seikh leads our marketing efforts with 6+ years of experience in digital marketing and brand strategy. He develops comprehensive marketing campaigns that increase brand visibility and drive client acquisition.',
      skills: ['Digital Marketing', 'Social Media Strategy', 'Content Marketing', 'SEO/SEM', 'Brand Development']
    },
    {
      id: "imtiaz",
      name: 'Sk Imtiazuddin',
      role: 'Graphic Designer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'imtiaz@matrix404.com',
      experience: '5+ years',
      bio: 'Sk Imtiazuddin is our creative graphic designer with 5+ years of experience in visual design and branding. He creates compelling visual assets that communicate our clients\' brand messages effectively and memorably.',
      skills: ['Graphic Design', 'UI Design', 'Brand Identity', 'Motion Graphics', 'Print Design']
    },
  ];

  return (
    <section id="team" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-secondary-800 font-heading"
          >
            Our <span className="text-primary-600">Team</span>
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
            Meet our team of experienced professionals dedicated to delivering exceptional IT solutions and strategic guidance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.slice(0, 3).map((member, index) => (
            <TeamMember
              key={index}
              id={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              twitter={member.twitter}
              github={member.github}
              email={member.email}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          {teamMembers.slice(3, 6).map((member, index) => (
            <TeamMember
              key={index + 3}
              id={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              twitter={member.twitter}
              github={member.github}
              email={member.email}
              delay={(index + 3) * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
export { type TeamMemberProps };