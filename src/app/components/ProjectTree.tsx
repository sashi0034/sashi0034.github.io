'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { Project } from '../types/project'

interface ProjectTreeProps {
  project: Project
  level?: number
}

export function ProjectTree({ project, level = 0 }: ProjectTreeProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const hasSubProjects = project.subProjects && project.subProjects.length > 0

  return (
    <div className="w-full">
      <div
        className={`
          flex items-center p-4 cursor-pointer
          ${level > 0 ? 'ml-6 border-l-2 border-primary-200' : ''}
          hover:bg-primary-50 transition-colors duration-200
        `}
        onClick={() => {
          if (hasSubProjects) {
            setIsExpanded(!isExpanded)
          } else {
            setShowDetails(!showDetails)
          }
        }}
      >
        {hasSubProjects && (
          <div className="mr-2 text-primary-600">
            {isExpanded ? (
              <ChevronDownIcon className="h-5 w-5" />
            ) : (
              <ChevronRightIcon className="h-5 w-5" />
            )}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showDetails && !hasSubProjects && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className={`ml-6 p-4 bg-gray-50 ${level > 0 ? 'border-l-2 border-primary-200' : ''}`}>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">詳細説明</h4>
                  <p className="text-sm text-gray-600">{project.detailedDescription}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">主な機能</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">課題</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {project.challenges.map((challenge) => (
                        <li key={challenge}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">解決策</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {project.solutions.map((solution) => (
                        <li key={solution}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {(project.githubUrl || project.demoUrl) && (
                  <div className="flex gap-4 pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 hover:text-primary-700"
                      >
                        デモを見る →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {isExpanded && hasSubProjects && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {project.subProjects!.map((subProject) => (
              <ProjectTree
                key={subProject.id}
                project={subProject}
                level={level + 1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 