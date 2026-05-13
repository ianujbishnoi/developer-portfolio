'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                I&apos;m a backend-focused software engineer with over 5 years of experience building robust, scalable systems. My expertise lies in designing and implementing enterprise-grade solutions that power real businesses.
              </p>
              <p>
                Specializing in REST APIs, authentication systems, and complex business logic implementation, I take pride in writing clean, maintainable code that solves real problems. Every line I write is focused on performance, security, and scalability.
              </p>
              <p>
                Whether it&apos;s architecting multi-tenant applications, integrating payment systems, or optimizing database queries, I approach each challenge with a problem-solving mindset and a commitment to excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-background/50 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold text-foreground mb-2">Core Focus Areas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Backend Architecture & Design Patterns
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    RESTful API Development
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Database Optimization & Indexing
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Authentication & Authorization
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Payment Integration & Financial Systems
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
