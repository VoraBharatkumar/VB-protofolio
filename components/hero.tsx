'use client'

import { motion } from 'motion/react'
import { ArrowUpRight, ShieldCheck, TrendingUp, Award, CheckCircle2 } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

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
  { value: '$450M+', label: 'Enterprise Value Created', note: 'Proven ROI across fintech & SaaS' },
  { value: '99.99%', label: 'Reliability SLA', note: 'Bank-grade production systems' },
  { value: '90+', label: 'Products Delivered', note: 'Zero-downtime architecture' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] items-center overflow-hidden px-6 md:px-12 lg:px-20 pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white"
    >
      {/* Soft background grid lines */}
      <div className="pointer-events-none absolute inset-0 grid-bg-light opacity-50" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative grid w-full items-center gap-10 lg:gap-12 lg:grid-cols-12"
      >
        <div className="lg:col-span-7">
          <motion.div variants={item} className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-1.5 text-xs font-bold text-[#64748B] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0EA5E9] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0EA5E9]" />
              </span>
              Available for Strategic Advisory &amp; Consultations — Q3/Q4 2026
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 text-balance font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1E3A8A] leading-[1.12]"
          >
            Engineering dynamic, data-driven web platforms for{' '}
            <span className="text-[#2563EB]">global leaders</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-pretty text-sm sm:text-base leading-relaxed text-[#64748B] font-normal"
          >
            I'm <strong className="text-[#1E3A8A] font-bold">Vora Bharat</strong> — Senior Executive Technical Advisor & Full Stack Developer.
            I build MERN-stack applications with real-time data, secure authentication, REST APIs, and responsive dynamic UIs for enterprise teams and venture-backed founders.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-md"
            >
              Explore Executive Portfolio
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] px-5 py-3 text-xs sm:text-sm font-bold text-[#1E3A8A] transition-all duration-200 hover:bg-[#F1F5F9]"
            >
              Initiate Dialogue
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#E2E8F0] pt-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#1E3A8A] tracking-tight">
                  {s.value}
                </div>
                <div className="mt-0.5 text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  {s.label}
                </div>
                <div className="mt-0.5 text-[11px] text-[#64748B]/80 font-medium">
                  {s.note}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Executive architecture dashboard showcase */}
        <div className="lg:col-span-5">
          <motion.div variants={item} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-6 sm:p-7 shadow-md shadow-[#1E3A8A]/5">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E3A8A] font-display text-base font-extrabold text-white shadow-xs">
                    VB
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1E3A8A] flex items-center gap-1">
                      Vora Bharat
                      <ShieldCheck className="h-4 w-4 text-[#0EA5E9]" />
                    </div>
                    <div className="text-xs text-[#64748B] font-medium">Web Developer MERN</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 px-2.5 py-1 text-[11px] font-bold text-[#0EA5E9]">
                  <Award className="h-3.5 w-3.5" />
                  Top 1% Architect
                </div>
              </div>

              <div className="mt-5 space-y-3.5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Core Architecture Performance
                </div>

                {[
                  { title: 'Enterprise Web Architecture', score: '99.8%', desc: 'Next.js App Router & Micro-Frontends' },
                  { title: 'Design System Governance', score: '98.5%', desc: 'Tokenized component architecture' },
                  { title: 'Security & SLA Compliance', score: '100%', desc: 'SOC2 & Bank-grade standards' },
                ].map((t, i) => (
                  <div key={t.title} className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#1E3A8A] flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#2563EB]" />
                        {t.title}
                      </span>
                      <span className="font-mono text-[#2563EB] font-extrabold">{t.score}</span>
                    </div>
                    <div className="mt-1 text-[11px] text-[#64748B] pl-5 font-medium">
                      {t.desc}
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E2E8F0]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: t.score }}
                        transition={{ duration: 1, delay: 0.4 + i * 0.15 }}
                        className="h-full rounded-full bg-[#2563EB]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[#E2E8F0] pt-4 text-xs text-[#64748B]">
                <div className="flex items-center gap-1.5 font-medium">
                  <TrendingUp className="h-4 w-4 text-[#0EA5E9]" />
                  <span>Verified Retention: <strong className="text-[#1E3A8A]">99.4%</strong></span>
                </div>
                <div className="flex gap-2">
                  <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[#64748B] hover:text-[#1E3A8A] transition-colors">
                    <FaGithub className="h-4 w-4" />
                  </a>
                 
                  <a
  href="https://www.linkedin.com/in/bharat-vora/"
  target="_blank"
  rel="noreferrer"
  aria-label="LinkedIn"
  className="text-[#64748B] hover:text-[#1E3A8A] transition-colors"
>
  <FaLinkedin className="h-4 w-4" />
</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
