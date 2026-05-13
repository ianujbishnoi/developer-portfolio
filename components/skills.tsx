'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'Backend',
    skills: ['C#', 'ASP.NET Core', 'Web API', 'Entity Framework Core', 'LINQ', 'JWT Authentication'],
  },
  {
    name: 'Database',
    skills: ['SQL Server', 'MySQL', 'Query Optimization', 'Indexing', 'Stored Procedures'],
  },
  {
    name: 'Tools & DevOps',
    skills: ['Git', 'GitHub Actions', 'CI/CD', 'Azure', 'Postman', 'Docker'],
  },
  {
    name: 'Frontend',
    skills: ['React.js', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  },
]

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-2 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="group bg-card border border-border hover:border-primary/50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-background border border-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
