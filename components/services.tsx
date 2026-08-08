'use client'

import { Reveal } from './reveal'
import { MonitorSmartphone, Blocks, LineChart, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: LineChart,
    title: 'MERN Full-Stack Development',
    text: 'End-to-end development with MongoDB, Express, React, and Node.js — building dynamic, API-driven platforms with real-time data handling, authentication, and database-backed content.',
    points: ['React / Next.js Frontends', 'Node.js + Express APIs', 'MongoDB Data Modeling & Indexing'],
  },
  {
    icon: MonitorSmartphone,
    title: 'Frontend & Dynamic UI Engineering',
    text: 'Responsive, interactive interfaces using React, Tailwind CSS, and modern state management — connecting to REST/GraphQL backends with live data updates.',
    points: ['Component-Driven Architecture', 'Tailwind CSS & shadcn/ui', 'API Integration & Live Data'],
  },
  {
    icon: Blocks,
    title: 'API, Auth & Real-Time Systems',
    text: 'Secure REST APIs, JWT/OAuth authentication, role-based access control, real-time sockets, and cloud deployments for production-grade web applications.',
    points: ['REST & GraphQL APIs', 'JWT / OAuth & RBAC', 'CI/CD & Cloud Deployments'],
  },
]

export function Services() {
  return (
    <section id="services" className="relative px-6 md:px-12 lg:px-20 py-20 sm:py-28 lg:py-32 bg-white border-t border-[#E2E8F0]">
      <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
        <h2 className="text-balance font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1E3A8A] leading-tight">
          Tailored engagements for{' '}
          <span className="text-[#2563EB]">high-value outcomes</span>
        </h2>
        <p className="mt-3.5 text-pretty text-sm sm:text-base leading-relaxed text-[#64748B] font-normal">
          Flexible advisory and principal engineering partnerships designed to deliver lasting enterprise value.
        </p>
      </div>
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="group relative flex h-full flex-col rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-7 sm:p-8 shadow-xs transition-all duration-300 hover:border-[#2563EB]/40 hover:bg-white hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-extrabold text-[#64748B] uppercase tracking-widest">
                  Engagement 0{i + 1}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E3A8A] text-white shadow-xs">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 font-display text-lg font-bold text-[#1E3A8A] tracking-tight">{s.title}</h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#64748B]">
                {s.text}
              </p>

              <ul className="mt-5 space-y-2 border-t border-[#E2E8F0] pt-4">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-xs font-semibold text-[#1E3A8A]"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#0EA5E9]" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-3 border-t border-[#E2E8F0]">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2563EB] transition-colors group-hover:text-[#1D4ED8]"
                >
                  Initiate Engagement
                  <ArrowRight className="h-3.5 w-3.5 text-[#2563EB] transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}