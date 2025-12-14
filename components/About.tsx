"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Brain, Target } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "FAST NUCES Graduate",
    description: "Computer Science degree with focus on AI/ML",
  },
  {
    icon: Brain,
    title: "AI & ML Specialist",
    description: "Deep expertise in neural networks and deep learning",
  },
  {
    icon: Code,
    title: "Data Science Expert",
    description: "Transforming data into actionable insights",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Building intelligent solutions for real-world challenges",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Computer Scientist and FAST NUCES graduate with a
              deep fascination for the intersection of data, intelligence, and
              technology. My journey in Data Science, Artificial Intelligence,
              and Machine Learning has been driven by curiosity and a desire to
              solve complex problems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With a strong foundation in computer science principles and
              specialized expertise in AI/ML, I thrive on transforming raw data
              into meaningful insights and building intelligent systems that make
              a real impact. Whether it's developing predictive models, creating
              neural networks, or analyzing complex datasets, I approach each
              challenge with analytical rigor and creative problem-solving.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm constantly learning and staying updated with the latest
              advancements in the field, always eager to apply cutting-edge
              techniques to solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

