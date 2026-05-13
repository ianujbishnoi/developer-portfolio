'use client'

import { motion } from 'framer-motion'

const pipeline = [
  {
    stage: 'Code',
    description: 'Write and commit code to repository',
    icon: '📝',
  },
  {
    stage: 'Build',
    description: 'Compile and run unit tests',
    icon: '🔨',
  },
  {
    stage: 'Test',
    description: 'Execute integration and E2E tests',
    icon: '✅',
  },
  {
    stage: 'Deploy',
    description: 'Deploy to staging and production',
    icon: '🚀',
  },
]

export function CICD() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-2 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Engineering Workflow</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {pipeline.map((item, idx) => (
            <motion.div
              key={item.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-background border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.stage}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>

              {/* Arrow */}
              {idx < pipeline.length - 1 && (
                <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-6 h-6 text-primary/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 5l7 7m0 0l-7 7m7-7H6"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-background border border-border rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">Tools & Technologies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Version Control', items: ['GitHub', 'Git Flow', 'Pull Requests'] },
              { title: 'CI/CD', items: ['GitHub Actions', 'Automated Testing', 'Deployment'] },
              { title: 'Infrastructure', items: ['Azure', 'Docker', 'Cloud Services'] },
            ].map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold text-foreground mb-3">{group.title}</h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
