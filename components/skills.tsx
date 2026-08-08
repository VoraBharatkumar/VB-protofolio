'use client'

import { Reveal } from './reveal'
import {
  Code2,
  Palette,
  Cpu,
  ShieldCheck,
  Database,
  Globe,
} from 'lucide-react'

const groups = [
  {
    icon: Code2,
    title: 'Full-Stack MERN Development',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication & Authorization'],
  },
  {
    icon: Cpu,
    title: 'Strategic Tech Leadership',
    skills: ['Fractional CTO Advisory', 'Tech Stack Modernization', 'Engineering Governance', 'Team Mentorship'],
  },
  {
    icon: Palette,
    title: 'Enterprise Design Systems',
    skills: ['Figma Design Tokens', 'Headless Component Libraries', 'WCAG AAA Accessibility', 'Design Ops'],
  },
  {
    icon: Database,
    title: 'Data Architecture & Infrastructure',
    skills: ['Edge Computing', 'GraphQL / tRPC', 'PostgreSQL & Redis', 'Serverless APIs'],
  },
  {
    icon: Globe,
    title: 'Intelligent Systems & AI',
    skills: ['LLM Streaming UI', 'Real-Time Telemetry', 'AI Command Palettes', 'Predictive Dashboards'],
  },
  {
    icon: ShieldCheck,
    title: 'Security & Performance SLA',
    skills: ['Core Web Vitals Optimization', 'Sub-100ms Response Times', 'OWASP Compliance', 'SOC2 Readiness'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-12 lg:px-20 py-20 sm:py-28 lg:py-32 bg-white border-t border-[#E2E8F0]">
      <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
        <h2 className="text-balance font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1E3A8A] leading-tight">
          Enterprise capabilities engineered for{' '}
          <span className="text-[#2563EB]">high-stakes scale</span>
        </h2>
        <p className="mt-3.5 text-pretty text-sm sm:text-base leading-relaxed text-[#64748B] font-normal">
          A comprehensive technical suite tailored for mission-critical software, enterprise web platforms, and boardroom-level digital transformations.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 0.06}>
            <div className="group relative h-full overflow-hidden rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-6 shadow-xs transition-all duration-300 hover:border-[#2563EB]/40 hover:bg-white hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#1E3A8A] border border-[#E2E8F0] transition-colors group-hover:bg-[#1E3A8A] group-hover:text-white">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-[#1E3A8A] tracking-tight">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-[#E2E8F0] bg-white px-2.5 py-1 text-xs font-semibold text-[#64748B] transition-colors group-hover:border-[#2563EB]/20 group-hover:text-[#1E3A8A]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
