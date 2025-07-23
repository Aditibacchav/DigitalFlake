import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  HeartIcon,
  CodeBracketIcon 
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "3+ years of experience building web applications"
    },
    {
      icon: <BriefcaseIcon className="w-8 h-8" />,
      title: "Professional Projects",
      description: "Successfully delivered 15+ client projects"
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and frameworks"
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "User-Centered Design",
      description: "Passionate about creating intuitive user experiences"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo and Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-blue-600">A</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 rounded-full opacity-20"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-purple-600 rounded-full opacity-30"></div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Aditi Sharma
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate full stack developer with a love for creating elegant solutions 
              to complex problems. My journey in web development started 3 years ago, and since 
              then I've been dedicated to crafting user-centered digital experiences that make 
              a difference.
            </p>
          </motion.div>

          {/* Skills and Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-4">
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                What I'm passionate about:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Creating intuitive and accessible user interfaces</li>
                <li>• Building scalable and maintainable applications</li>
                <li>• Learning new technologies and best practices</li>
                <li>• Collaborating with teams to solve complex problems</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;