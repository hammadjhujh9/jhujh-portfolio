"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const experiences = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Bachelor of Science in Computer Science",
    organization: "FAST NUCES (National University of Computer and Emerging Sciences)",
    period: "Graduated",
    description: [
      "Earned a comprehensive degree with specialization in Artificial Intelligence and Machine Learning",
      "Built strong expertise in data structures, algorithms, and advanced software engineering principles",
      "Developed and deployed machine learning models for computer vision, natural language processing, and predictive analytics",
      "Completed capstone projects involving deep learning architectures, neural networks, and data pipeline optimization",
      "Participated in competitive programming, hackathons, and tech innovation challenges",
      "Collaborated on research-oriented projects exploring cutting-edge AI applications",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Data Science & AI Practitioner",
    organization: "Professional Development",
    period: "2024 - Present",
    description: [
      "Designing and implementing end-to-end machine learning solutions for real-world business problems",
      "Expertise in Python, TensorFlow, PyTorch, scikit-learn, and modern ML frameworks",
      "Proficient in data preprocessing, feature engineering, model training, and hyperparameter optimization",
      "Building scalable data pipelines and deploying ML models to production environments",
      "Specialized in deep learning for image recognition, NLP for text analysis, and predictive modeling",
      "Creating data visualizations and dashboards to communicate insights effectively",
      "Staying current with latest research in transformer architectures, LLMs, and generative AI",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    type: "achievement",
    icon: Award,
    title: "Continuous Learning & Skill Development",
    organization: "Self-Directed Growth",
    period: "Ongoing",
    description: [
      "Actively learning advanced topics: transformer models, reinforcement learning, and MLOps",
      "Contributing to open-source projects and building a portfolio of impactful ML applications",
      "Following industry leaders and engaging with the global AI/ML community",
      "Exploring interdisciplinary applications of AI in healthcare, finance, and social impact",
      "Developing expertise in cloud platforms (AWS, GCP) for ML deployment and scaling",
      "Pursuing certifications and courses to deepen technical knowledge and practical skills",
    ],
    color: "from-orange-500 to-red-500",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-white dark:bg-gray-900"
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
            Education & <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                          {exp.organization}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-700 dark:text-gray-300 flex items-start"
                        >
                          <span className="text-primary-500 mr-2">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary-300 to-purple-300 hidden md:block"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

