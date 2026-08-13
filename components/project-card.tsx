'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { ProjectImageSlider } from './project-image-slider'

export type Project = {
  name: string
  type: 'Frontend' | 'Fullstack'
  technologies: string[]
  images: string[]
  github?: string
  demo?: string
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-[#E2E8F0] shadow-xs transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-xl"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <ProjectImageSlider images={project.images} alt={project.name} />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-bold text-[#1E3A8A] tracking-tight">
          {project.name}
        </h3>

        <span className="mt-1.5 inline-flex w-fit items-center rounded-full bg-[#F1F5F9] border border-[#E2E8F0] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0EA5E9]">
          {project.type}
        </span>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <motion.span
              key={t}
              className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-xs font-semibold text-[#64748B]"
              whileHover={{ scale: 1.05, backgroundColor: '#2563EB', color: '#fff' }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {t}
            </motion.span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live website`}
              className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#2563EB] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-[#1D4ED8]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Live Website
              <ArrowUpRight className="h-3.5 w-3.5" />
            </motion.a>
          )}
          <motion.a
            href={project.github || '#'}
            target={project.github ? '_blank' : undefined}
            rel={project.github ? 'noreferrer' : undefined}
            aria-label={`${project.name} GitHub repository`}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-2.5 text-xs font-bold text-[#64748B] transition-colors hover:bg-[#1E3A8A] hover:text-white"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="h-4 w-4" />
            <span>GitHub</span>
          </motion.a>
        </div>
      </div>
    </motion.article>
  )
}