"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Data Science",
    skills: [
      "Python",
      "R",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Visualization",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Machine Learning",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "XGBoost",
      "Random Forest",
      "Neural Networks",
      "Deep Learning",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "AI & NLP",
    skills: [
      "Natural Language Processing",
      "Computer Vision",
      "Transformers",
      "BERT",
      "GPT Models",
      "OpenAI API",
      "LangChain",
      "Hugging Face",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Tools & Technologies",
    skills: [
      "Jupyter Notebooks",
      "Git",
      "Docker",
      "AWS",
      "Google Cloud",
      "Tableau",
      "Power BI",
      "Apache Spark",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3
                className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 border border-primary-200 dark:border-primary-800"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

