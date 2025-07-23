import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon,
  EyeIcon 
} from '@heroicons/react/24/outline';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates using Socket.io. Users can create projects, assign tasks, and track progress.",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io", "Material-UI"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current weather and 5-day forecast. Built with React and integrated with OpenWeatherMap API.",
      technologies: ["React", "TypeScript", "Weather API", "Chart.js", "CSS3"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing multiple social media accounts with analytics, scheduling, and engagement tracking features.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS", "Chart.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Restaurant Booking System",
      description: "A restaurant reservation system with table management, customer booking, and admin dashboard. Features real-time availability and email notifications.",
      technologies: ["React", "Node.js", "MySQL", "Express.js", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Personal Finance Tracker",
      description: "A comprehensive finance tracking application with expense categorization, budget planning, and financial goal setting with interactive charts.",
      technologies: ["React", "Firebase", "Chart.js", "Material-UI", "PWA"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.featured && (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-200">
                      <EyeIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 transition-colors duration-200">
                      <CodeBracketIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                  </div>
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;