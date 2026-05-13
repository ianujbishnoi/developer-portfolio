'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'App Ripe Technology',
    position: 'Senior Backend Developer',
    period: '2025 – Present',
    description: 'Leading backend architecture and development for enterprise solutions.',
    highlights: ['Architecture Design', 'API Development', 'Database Optimization', 'Team Leadership'],
  },
  {
    company: 'Anthem InfoTech Pvt. Ltd.',
    position: 'Backend Developer',
    period: '2022 – 2024',
    description: 'Developed and maintained scalable backend systems for multiple client projects.',
    highlights: ['REST API Development', 'Database Design', 'Payment Integration', 'Code Review'],
  },
  {
    company: 'KMA Technoware Pvt. Ltd.',
    position: 'Junior Backend Developer',
    period: '2020 – 2021',
    description: 'Started career building backend features and implementing business logic.',
    highlights: ['Feature Development', 'Bug Fixes', 'Testing', 'Documentation'],
  },
]

export function Experience() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-2 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Professional Timeline</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className={`flex ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0 relative`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 -translate-x-1.5 border-4 border-background"></div>

                {/* Content */}
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                  <motion.div
                    whileHover={{ x: idx % 2 === 0 ? 10 : -10 }}
                    className="bg-card border border-border hover:border-primary/50 rounded-lg p-6 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
