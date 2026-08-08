'use client'

import type { ReactNode } from 'react'
import { motion } from 'motion/react'

export function Reveal({
  children,
  delay = 0,
  className,
  y = 16,
}: {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: ReactNode
  description?: string
}) {
  return (
    <div className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center px-4">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#64748B]">
          <span className="h-2 w-2 rounded-full bg-[#0EA5E9]" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-4 text-balance font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1E3A8A] leading-tight">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className="mt-3.5 text-pretty text-sm sm:text-base leading-relaxed text-[#64748B] max-w-2xl mx-auto font-normal">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
