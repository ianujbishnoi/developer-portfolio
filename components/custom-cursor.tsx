'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Check for hover elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('button') ||
        target.closest('a')
      setIsHovering(!!isClickable)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[999]"
      >
        <div
          className={`w-3 h-3 rounded-full ${
            isHovering ? 'bg-primary scale-150' : 'bg-primary/50'
          } transition-all duration-200`}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      </motion.div>

      {/* Cursor glow ring */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          mass: 0.7,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[998]"
      >
        <div
          className={`w-8 h-8 border ${
            isHovering
              ? 'border-primary/70 scale-150'
              : 'border-primary/30'
          } rounded-full transition-all duration-200`}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        ></div>
      </motion.div>
    </>
  )
}
