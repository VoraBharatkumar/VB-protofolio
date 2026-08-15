'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Reveal } from './reveal'
import { ArrowRight, Code2, Server, Database, ChevronRight, X } from 'lucide-react'
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

interface Layer {
  icon: typeof Code2
  title: string
  description: string
  tools: string[]
  IconComponent: typeof SiReact
}

const layers: Layer[] = [
  {
    icon: Code2,
    title: 'Frontend Layer',
    description: 'Building responsive, accessible, and dynamic user interfaces with modern React patterns.',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    IconComponent: SiReact,
  },
  {
    icon: Server,
    title: 'Backend Layer',
    description: 'Designing scalable server logic, RESTful APIs, and secure authentication systems.',
    tools: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
    IconComponent: SiNodedotjs,
  },
  {
    icon: Database,
    title: 'Database Layer',
    description: 'Structuring data for performance with optimized schemas and efficient data modeling.',
    tools: ['MongoDB', 'Mongoose', 'Schema Design', 'Indexing'],
    IconComponent: SiMongodb,
  },
]

interface Milestone {
  year: string
  title: string
  description: string
  isActive?: boolean
}

const milestones: Milestone[] = [
  {
    year: '2023',
    title: 'Started Web Development Journey',
    description: 'Began learning HTML, CSS, and JavaScript. Built my first static websites and discovered passion for creating digital experiences.',
  },
  {
    year: '2024',
    title: 'First MERN Stack Project',
    description: 'Developed full-stack applications with MongoDB, Express, React, and Node.js. Mastered REST APIs and database integration.',
  },
  {
    year: '2025',
    title: 'Professional Freelance Work',
    description: 'Started taking on client projects, delivering production-ready applications with authentication, real-time features, and responsive UIs.',
  },
  {
    year: '2026',
    title: 'Next.js + TypeScript Focus[Fullstack]',
    description: 'Specialized in Next.js App Router, TypeScript, and enterprise-grade architecture. Building type-safe, scalable full-stack systems.',
    isActive: true,
  },
]

const stats = [
  { value: '40+', label: 'Projects Shipped' },
  { value: '3+', label: 'Years Experience' },
  { value: '100%', label: 'TypeScript Coverage' },
  { value: '15+', label: 'Technologies' },
]

interface ResumeOption {
  id: string
  title: string
  description: string
  filePath: string
  icon: React.ComponentType<{ className?: string }>
}

const resumeOptions: ResumeOption[] = [
  {
    id: 'mern',
    title: 'MERN Stack Resume',
    description: 'Focus on MongoDB, Express, React, Node.js full-stack development',
    filePath: '/resumes/Bharat_Vora_MERN_Resume....pdf',
    icon: SiReact,
  },
  {
    id: 'fullstack',
    title: 'Full Stack Resume',
    description: 'Complete full-stack development including Next.js, TypeScript, and modern frameworks',
    filePath: '/resumes/VORA_BHARAT1.pdf',
    icon: SiNextdotjs,
  },
]

export function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 px-6 md:px-12 lg:px-20 py-20 sm:py-28 lg:py-32">
      {/* Background elements matching Hero.tsx */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blueprint dot-grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
            backgroundSize: '26px 26px',
            maskImage: 'radial-gradient(ellipse 65% 65% at 50% 0%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 0%, black 30%, transparent 100%)',
            opacity: 0.6,
          }}
        />

        {/* Ambient color orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-indigo-400/15 blur-[110px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-300/20 blur-[110px]"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10"
      >
        {/* Eyebrow + Heading */}
        <motion.div variants={item} className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-600 shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            About Me
          </span>
          <h2 className="text-balance font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            I don't just build UIs.
            <br />
            <span className="text-indigo-600">I build the whole system.</span>
          </h2>
          <p className="text-pretty text-base sm:text-lg leading-relaxed text-slate-600">
            I'm <strong className="text-slate-900 font-semibold">Vora Bharat</strong>, a MERN Stack & Full-Stack Developer specializing in Next.js and TypeScript. 
            I take complete ownership of applications — from database schema design and API development to crafting responsive, type-safe frontends. 
            My approach ensures end-to-end consistency, performance, and maintainability.
          </p>
        </motion.div>

        {/* How I Work - Layered Stack Breakdown */}
        <motion.div variants={item} className="mb-20 sm:mb-28">
          <h3 className="text-center font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-12">
            How I <span className="text-indigo-600">Work</span>
          </h3>
          
          <div className="grid gap-6 lg:gap-8 lg:grid-cols-3 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-200 -z-10" />
            
            {layers.map((layer, i) => (
              <motion.div
                key={layer.title}
                variants={item}
                className="group relative"
              >
                <div className="h-full rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-indigo-600/40 hover:shadow-lg hover:shadow-indigo-600/10">
                  {/* Layer icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <layer.icon className="h-6 w-6" />
                  </div>

                  {/* Layer number badge */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-3">
                    Layer 0{i + 1}
                  </div>

                  <h4 className="font-display text-lg font-bold text-slate-900 tracking-tight mb-2">
                    {layer.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600 mb-5">
                    {layer.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {layer.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 transition-colors group-hover:border-indigo-600/20 group-hover:text-indigo-600"
                      >
                        {layer.IconComponent && (
                          <layer.IconComponent className="h-3 w-3" />
                        )}
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Arrow connector (except last) */}
                  {i < layers.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm">
                        <ChevronRight className="h-4 w-4 text-indigo-600" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div variants={item} className="mb-20 sm:mb-28">
          <h3 className="text-center font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-12">
            My <span className="text-indigo-600">Journey</span>
          </h3>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                variants={item}
                className="relative flex gap-6 sm:gap-8 mb-10 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className={`flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full border-4 bg-white ${
                    milestone.isActive 
                      ? 'border-emerald-500 shadow-lg shadow-emerald-500/20' 
                      : 'border-slate-300'
                  }`}>
                    <span className={`text-xs sm:text-sm font-bold ${milestone.isActive ? 'text-emerald-600' : 'text-slate-600'}`}>
                      {milestone.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm hover:border-indigo-600/40 hover:shadow-md transition-all">
                    <h4 className="font-display text-base sm:text-lg font-bold text-slate-900 mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

   

        {/* CTA */}
        <motion.div variants={item} className="text-center">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-700 hover:shadow-indigo-600/35"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Resume
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Resume Selection Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-900"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Modal header */}
              <div className="mb-6">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
                  Select Resume
                </h3>
                <p className="text-sm text-slate-600">
                  Choose the resume version you'd like to view
                </p>
              </div>

              {/* Resume options */}
              <div className="grid gap-4 sm:grid-cols-2">
                {resumeOptions.map((resume) => (
                  <motion.a
                    key={resume.id}
                    href={resume.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-slate-200 bg-slate-50 p-6 transition-all hover:border-indigo-600 hover:bg-white hover:shadow-lg"
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 text-white transition-transform group-hover:scale-110 group-hover:rotate-3">
                      <resume.icon className="h-7 w-7" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-display text-base font-bold text-slate-900 mb-1">
                        {resume.title}
                      </h4>
                      <p className="text-xs text-slate-600">
                        {resume.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-indigo-600">
                      View PDF
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Modal footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 text-center">
                <p className="text-xs text-slate-600">
                  Both resumes highlight different aspects of my full-stack expertise
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}