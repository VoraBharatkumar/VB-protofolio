'use client'

import { motion } from 'motion/react'
import { Reveal } from './reveal'
import {
  Code2,
  Palette,
  Cpu,
  Server,
} from 'lucide-react'

const capabilities = [
  {
    icon: Code2,
    title: 'Full-Stack MERN Development',
    subtitle: 'Complete Web Solutions',
    description: 'React, Node, Express, MongoDB, REST APIs & Authentication',
    color: 'from-blue-500 to-indigo-600',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication'],
  },
  {
    icon: Cpu,
    title: 'Strategic Tech Leadership',
    subtitle: 'Fractional CTO Services',
    description: 'CTO Advisory, Tech Modernization, Engineering Governance, Team Mentorship',
    color: 'from-purple-500 to-pink-600',
    skills: ['CTO Advisory', 'Tech Modernization', 'Engineering Governance', 'Team Mentorship'],
  },
  {
    icon: Palette,
    title: 'Enterprise Design Systems',
    subtitle: 'Scalable UI Architecture',
    description: 'Figma Tokens, Component Libraries, WCAG AAA, Design Ops',
    color: 'from-emerald-500 to-teal-600',
    skills: ['Figma Tokens', 'Component Libraries', 'WCAG AAA', 'Design Ops'],
  },
  {
    icon: Server,
    title: 'Data Architecture & Infrastructure',
    subtitle: 'Robust Backend Systems',
    description: 'Edge Computing, GraphQL, PostgreSQL, Redis, Serverless APIs',
    color: 'from-orange-500 to-red-600',
    skills: ['Edge Computing', 'GraphQL', 'PostgreSQL', 'Redis', 'Serverless APIs'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-12 lg:px-20 py-10 sm:py-16 lg:py-20 bg-white border-t border-[#E2E8F0]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center mb-8 sm:mb-10">
        <h2 className="text-balance font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1E3A8A] leading-tight">
          Enterprise capabilities engineered for{' '}
          <span className="text-[#2563EB]">high-stakes scale</span>
        </h2>
      </div>

      {/* 4 Enterprise Capability Cards - 2x2 Grid */}
      <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 max-w-5xl mx-auto">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.title} delay={i * 0.15}>
              <motion.div
                className="group relative h-full overflow-hidden rounded-2xl bg-white border border-slate-200 p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/15"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${cap.color === 'from-blue-500 to-indigo-600' ? '#3b82f620' : cap.color === 'from-purple-500 to-pink-600' ? '#a855f720' : cap.color === 'from-emerald-500 to-teal-600' ? '#10b98120' : '#f9737220'})`,
                }}
              />

              {/* Icon with gradient */}
              <motion.div
                className={`relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br ${cap.color} text-white shadow-lg mb-4`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.7, type: 'spring' }}
              >
                <cap.icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.div>

              <div className="relative z-10">
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  {cap.title}
                </h3>
                <div className="mt-1.5 text-xs sm:text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                  {cap.subtitle}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {cap.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cap.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors group-hover:border-indigo-300 group-hover:text-indigo-700"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}