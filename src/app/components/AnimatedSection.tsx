'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

type AnimatedSectionProps = {
  children: ReactNode
  className?: string
} & Pick<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'transition' | 'viewport' | 'onClick'>

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