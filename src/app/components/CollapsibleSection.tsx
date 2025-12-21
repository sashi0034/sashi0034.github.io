'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

type CollapsibleSectionProps = {
  title: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
  variant?: 'card' | 'inline'
  contentClassName?: string
  buttonClassName?: string
}

export function CollapsibleSection({ title, children, defaultOpen = false, variant = 'card', contentClassName, buttonClassName }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const isCard = variant !== 'inline'

  return (
    <div className={isCard ? "bg-white rounded-lg shadow-lg overflow-hidden" : ""}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isCard
            ? "w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            : "inline-flex items-center gap-1 text-primary-600 hover:text-primary-700"
        } ${buttonClassName ?? ''}`}
      >
        <div className={isCard ? "flex-1" : ""}>
          {isCard && typeof title === 'string' ? (
            <h3 className="text-2xl font-bold text-primary-800">{title}</h3>
          ) : (
            title
          )}
        </div>
        <ChevronDownIcon
          className={`${isCard ? 'w-6 h-6' : 'w-4 h-4'} text-primary-600 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className={`${isCard ? 'px-6 pb-6' : ''} ${contentClassName ?? ''}`}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}