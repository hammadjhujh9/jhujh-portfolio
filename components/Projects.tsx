"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Brain, Database, BarChart3, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Advanced ML Prediction System",
    description:
      "Built a comprehensive machine learning pipeline for predictive analytics using ensemble methods and deep learning techniques.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    github: "#",
    demo: "#",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Developed an interactive data visualization dashboard for real-time analytics and business intelligence insights.",
    technologies: ["Python", "Tableau", "SQL", "Power BI"],
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
    github: "#",
    demo: "#",
  },
  {
    title: "NLP Sentiment Analysis Tool",
    description:
      "Created an advanced NLP system for sentiment analysis using transformer models and fine-tuned BERT architecture.",
    technologies: ["Python", "Transformers", "BERT", "Hugging Face"],
    icon: Sparkles,
    color: "from-orange-500 to-red-500",
    github: "#",
    demo: "#",
  },
  {
    title: "Big Data Processing Pipeline",
    description:
      "Designed and implemented a scalable data processing pipeline for handling large-scale datasets using distributed computing.",
    technologies: ["Python", "Apache Spark", "AWS", "Docker"],
    icon: Database,
    color: "from-green-500 to-emerald-500",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-gray-800"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in Data Science, AI,
            and Machine Learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

