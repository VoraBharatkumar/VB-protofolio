'use client'

import { Reveal } from './reveal'
import { Zap, Target, Layers, ShieldCheck } from 'lucide-react'

const highlights = [
  {
    icon: Zap,
    title: 'MERN Stack Delivery',
    text: 'End-to-end full-stack development with MongoDB, Express, React, and Node.js — building dynamic, API-driven web applications with authentication, real-time data, and responsive UIs.',
  },
  {
    icon: Target,
    title: 'Capital & Conversion ROI',
    text: 'Aligning technical decisions with revenue growth, enterprise valuation, and customer retention metrics across data-driven platforms.',
  },
  {
    icon: Layers,
    title: 'Dynamic UI & Design Systems',
    text: 'Crafting responsive, interactive frontend interfaces with React and Tailwind CSS, backed by robust backend services and database-driven content.',
  },
  {
    icon: ShieldCheck,
    title: 'Production-Grade Engineering',
    text: 'SOC2-aligned security, OWASP practices, CI/CD automation, and zero-downtime deployments for mission-critical full-stack systems.',
  },
]

export function About() {
  return (
    <section id="about" className="relative px-6 md:px-12 lg:px-20 py-20 sm:py-28 lg:py-32 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E2E8F0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#64748B] shadow-xs">
              <span className="h-2 w-2 rounded-full bg-[#0EA5E9]" />
              Executive Profile
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-balance font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1E3A8A] leading-tight">
              Leadership built on engineering rigor, strategic vision &amp;{' '}
              <span className="text-[#2563EB]">proven ROI</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-pretty text-sm sm:text-base leading-relaxed text-[#64748B] font-normal">
              For over a decade, I have served as a trusted advisor and principal engineer to executive teams, venture partners, and enterprise founders. My methodology bridges the gap between boardroom strategy and technical execution — delivering software that feels refined, reliable, and fundamentally valuable.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-pretty text-sm sm:text-base leading-relaxed text-[#64748B] font-normal">
              Whether modernizing a legacy enterprise ecosystem, launching a flagship SaaS platform, or establishing global component standards, I bring disciplined engineering practices that eliminate technical debt and maximize client return on capital.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#E2E8F0] pt-6">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">10+ Years</div>
                <div className="text-xs text-[#64748B] mt-0.5 font-bold">Executive Tech Experience</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#1E3A8A]">Fortune 500</div>
                <div className="text-xs text-[#64748B] mt-0.5 font-bold">Advisory &amp; Engineering</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl bg-white border border-[#E2E8F0] p-6 shadow-xs transition-all duration-300 hover:border-t-2 hover:border-t-[#2563EB] hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E3A8A] text-white shadow-xs">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-[#1E3A8A] tracking-tight">{h.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#64748B]">
                  {h.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
