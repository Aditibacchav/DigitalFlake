import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-700" },
        { name: "JavaScript", level: 95, color: "from-yellow-500 to-yellow-600" },
        { name: "HTML/CSS", level: 95, color: "from-orange-500 to-orange-600" },
        { name: "Tailwind CSS", level: 88, color: "from-teal-500 to-teal-600" },
        { name: "Next.js", level: 80, color: "from-gray-700 to-gray-800" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-500 to-green-600" },
        { name: "Express.js", level: 82, color: "from-gray-600 to-gray-700" },
        { name: "PostgreSQL", level: 78, color: "from-blue-700 to-blue-800" },
        { name: "MongoDB", level: 75, color: "from-green-600 to-green-700" },
        { name: "REST APIs", level: 88, color: "from-purple-500 to-purple-600" },
        { name: "GraphQL", level: 70, color: "from-pink-500 to-pink-600" },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90, color: "from-gray-800 to-black" },
        { name: "Docker", level: 75, color: "from-blue-600 to-blue-700" },
        { name: "AWS", level: 70, color: "from-orange-600 to-orange-700" },
        { name: "Figma", level: 85, color: "from-purple-600 to-purple-700" },
        { name: "Webpack", level: 75, color: "from-blue-500 to-blue-600" },
        { name: "Jest", level: 80, color: "from-red-500 to-red-600" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Redux", "Socket.io", "Prisma", "Firebase", "Vercel", "Netlify",
              "Framer Motion", "Material-UI", "Bootstrap", "Sass", "Python", "Java"
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white px-4 py-2 rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transition-shadow duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;