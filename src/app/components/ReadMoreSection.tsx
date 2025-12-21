'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

type ReadMoreSectionProps = {
  children: React.ReactNode
  collapsedHeight?: string
  moreText?: string
  lessText?: string
}

export function ReadMoreSection({
  children,
  collapsedHeight = '6rem',
  moreText = '詳細を見る',
  lessText = '閉じる',
}: ReadMoreSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative">
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : collapsedHeight }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden relative"
      >
        <div className={!isExpanded ? "" : ""}>
            {children}
        </div>
        
        {/* Gradient Overlay when collapsed */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"
            />
          )}
        </AnimatePresence>
      </motion.div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 mb-4 text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-1 focus:outline-none"
      >
        <span>{isExpanded ? lessText : moreText}</span>
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
    </div>
  )
}
