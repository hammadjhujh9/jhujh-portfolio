"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const experiences = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Bachelor of Science in Computer Science",
    organization: "FAST NUCES",
    period: "Graduated",
    description: [
      "Specialized in Artificial Intelligence and Machine Learning",
      "Strong foundation in algorithms, data structures, and software engineering",
      "Completed projects in deep learning, NLP, and computer vision",
      "Active participation in tech competitions and hackathons",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    type: "achievement",
    icon: Award,
    title: "Data Science & AI Specialist",
    organization: "Self-Directed Learning",
    period: "Ongoing",
    description: [
      "Continuous learning in cutting-edge AI/ML technologies",
      "Hands-on experience with real-world datasets and projects",
      "Staying updated with latest research papers and industry trends",
      "Building end-to-end ML pipelines and production systems",
    ],
    color: "from-purple-500 to-pink-500",
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

