'use client'

import { motion, TargetAndTransition, VariantLabels } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  initial?: TargetAndTransition | VariantLabels | boolean
  animate?: TargetAndTransition | VariantLabels | boolean
  transition?: {
    duration?: number
    delay?: number
    repeat?: number
    repeatType?: 'loop' | 'reverse' | 'mirror'
  }
  viewport?: {
    once?: boolean
    amount?: number
    margin?: string
  }
  onClick?: () => void
}

export function AnimatedSection({
  children,
  className = '',
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.8 },
  viewport = { once: true },
  onClick
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      viewport={viewport}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
} 