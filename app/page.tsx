'use client'

import { motion } from 'framer-motion'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { CICD } from '@/components/cicd'
import { Contact } from '@/components/contact'
import { useEffect, useState } from 'react'

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled =
        (window.scrollY / windowHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-primary to-primary/50 z-50" style={{ width: `${scrollProgress}%` }}></div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/40"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary"
          >
            AK
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ color: '#3b82f6' }}
                  className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
                >
                  {item}
                </motion.a>
              )
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-lg hover:shadow-primary/50 transition-shadow"
          >
            Hire Me
          </motion.button>
        </div>
      </motion.nav>

      {/* Sections */}
      <div id="hero">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="cicd">
        <CICD />
      </div>

      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-card border-t border-border py-12 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-foreground font-bold mb-2">Anuj Kumar</h3>
              <p className="text-muted-foreground text-sm">
                Senior Backend Developer | Building Scalable Systems
              </p>
            </div>

            <div className="flex items-center gap-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:anuj@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Email
              </motion.a>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Anuj Kumar. Built with Next.js, React, and Framer Motion.
            </p>
          </div>
        </div>
      </motion.footer>
    </main>
  )
}
