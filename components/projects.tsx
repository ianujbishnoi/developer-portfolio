'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Multi-Tenant E-Commerce Platform',
    description: 'A sophisticated e-commerce solution supporting multiple tenants with complete payment processing capabilities.',
    features: ['JWT Authentication', 'Role-based Authorization', 'Authorize.Net Payment', 'Partial Payments', 'Pagination', 'API Optimization'],
    tech: ['ASP.NET Core', 'Entity Framework', 'SQL Server'],
  },
  {
    title: 'Event Management Platform',
    description: 'Comprehensive event management system for planning, coordination, and invoicing of events.',
    features: ['Lead Management', 'Task Tracking', 'Scheduling', 'Invoicing', 'Multi-role Workflow'],
    tech: ['ASP.NET Core', 'REST API', 'MySQL'],
  },
  {
    title: 'Employee Management System',
    description: 'Enterprise HR solution with attendance tracking, analytics, and performance insights.',
    features: ['Attendance Tracking', 'Reporting System', 'JWT Authentication', 'Performance Analytics', 'Dashboard'],
    tech: ['ASP.NET Core', 'React.js', 'SQL Server'],
  },
  {
    title: 'Manufacturing ERP System',
    description: 'Large-scale ERP system for manufacturing operations with inventory and supply chain management.',
    features: ['Inventory Management', 'Purchase Orders', 'Reporting Modules', 'Workflow Optimization', 'Multi-department'],
    tech: ['ASP.NET Core', 'Entity Framework', 'SQL Server'],
  },
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-foreground/70 mb-2">Key Features</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground/70 mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 border border-primary/30 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full py-2 px-4 text-sm font-semibold text-primary border border-primary/50 rounded-lg hover:bg-primary/10 transition-colors"
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
