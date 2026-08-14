'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { CodeShowcase } from '@/components/CodeShowcase'

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

const stats = [
  { value: '3+ Yrs', label: 'Full-Stack Experience' },
  { value: '40+', label: 'Projects Shipped' },
  { value: '100%', label: 'TypeScript Coverage' },
]

const stack = [
  { icon: SiReact, label: 'React' },
  { icon: SiNextdotjs, label: 'Next.js' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiNodedotjs, label: 'Node.js' },
  { icon: SiExpress, label: 'Express' },
  { icon: SiMongodb, label: 'MongoDB' },
  { icon: SiTailwindcss, label: 'Tailwind CSS' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-50 px-6 md:px-12 lg:px-20 pt-16 sm:pt-28 pb-10 sm:pb-20"
    >
      {/* Animated floating orbs background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
          className="absolute -left-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-indigo-400/10 blur-[110px]"
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
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-300/15 blur-[110px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-[100px]"
        />
      </div>

      {/* Faint blueprint dot-grid, feathered toward the edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse 65% 65% at 50% 0%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 0%, black 30%, transparent 100%)',
          opacity: 0.6,
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-16"
      >
        <div className="lg:col-span-7">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600 shadow-sm animate-pulse">
              <span className="relative flex  h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex  h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for full-stack roles & freelance — 2026
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            <span className="inline-block">Frontend.</span>{' '}
            <span className="inline-block">Backend.</span>{' '}
            <span className="inline-block">Database.</span>
            <br />
            <motion.span
              className="inline-block text-indigo-600"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #4F46E5, #7C3AED, #4F46E5)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              One system, end to end.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-base sm:text-lg leading-relaxed text-slate-600"
          >
            I'm <strong className="text-slate-900 font-semibold">Vora Bharat</strong>, a Full-Stack Developer
            building production-ready apps with the MERN stack and Next.js — designing the data model, wiring
            the API, and shipping the UI, type-safe from database to deploy.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:bg-indigo-700 hover:shadow-indigo-600/35 hover:scale-105"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:scale-105"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Core stack — real tech, not decoration */}
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-2">
            {stack.map(({ icon: Icon, label }) => (
              <motion.span
                key={label}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-indigo-300 hover:text-indigo-600 cursor-default"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-6 max-w-md"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <motion.div
                  className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {s.value}
                </motion.div>
                <div className="mt-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Signature visual: the live full-stack code showcase */}
        <div className="lg:col-span-5 lg:-mt-16">
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <CodeShowcase />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}