'use client'

import Image from 'next/image'
import { Reveal } from './reveal'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Apex Institutional Wealth',
    category: 'Fintech & Asset Management',
    description:
      'Next-generation institutional wealth dashboard engineered for multi-asset management, live risk modelling, and high-frequency liquidity telemetry.',
    impact: '$1.2B Managed Assets | +44% Client Retention',
    image: '/projects/project-1.png',
    tags: ['Next.js 16', 'TypeScript', 'Risk Analytics', 'High SLA'],
    demo: '#',
    github: '#',
  },
  {
    title: 'OmniCloud Telemetry Platform',
    category: 'Enterprise SaaS Architecture',
    description:
      'Real-time cloud infrastructure monitoring platform handling multi-region streaming data, anomaly detection, and unified team command tools.',
    impact: '5M+ Daily Events | Sub-50ms Latency',
    image: '/projects/project-2.png',
    tags: ['Edge Compute', 'Design System', 'PostgreSQL', 'tRPC'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Vanguard Global Commerce',
    category: 'Luxury Omnichannel Retail',
    description:
      'Editorial headless storefront built for a prestige fashion enterprise, featuring instant page transitions, internationalization, and dynamic localized pricing.',
    impact: '38% Conversion Lift | $45M Revenue',
    image: '/projects/project-3.png',
    tags: ['React 19', 'Headless Engine', 'Design Tokens', 'GSAP'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Cortex Clinical AI Portal',
    category: 'HealthTech & AI Infrastructure',
    description:
      'HIPAA-compliant medical intelligence suite with streaming LLM diagnostics, structured electronic health records integration, and strict role-based access.',
    impact: 'SOC2 & HIPAA Certified | 99.99% Reliability',
    image: '/projects/project-4.png',
    tags: ['AI SDK', 'Edge Security', 'HIPAA Compliant', 'React'],
    demo: '#',
    github: '#',
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative px-6 md:px-12 lg:px-20 py-20 sm:py-28 lg:py-32 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
        <h2 className="text-balance font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1E3A8A] leading-tight">
          Enterprise platforms built for{' '}
          <span className="text-[#2563EB]">measurable impact</span>
        </h2>
        <p className="mt-3.5 text-pretty text-sm sm:text-base leading-relaxed text-[#64748B] font-normal">
          A selection of high-stakes web platforms, fintech products, and design systems delivered for industry-leading organizations.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-[#E2E8F0] shadow-xs transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-lg">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F1F5F9]">
                <Image
                  src={p.image || '/placeholder.svg'}
                  alt={`${p.title} — ${p.category}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent opacity-90" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 border border-[#E2E8F0] backdrop-blur-md px-3 py-1 text-xs font-bold text-[#1E3A8A] shadow-xs">
                  {p.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0EA5E9] mb-2 uppercase tracking-wider">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {p.impact}
                </div>

                <h3 className="font-display text-xl font-bold text-[#1E3A8A] tracking-tight">{p.title}</h3>
                <p className="mt-2.5 flex-1 text-xs sm:text-sm leading-relaxed text-[#64748B]">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-xs font-semibold text-[#64748B]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-[#E2E8F0]">
                  <a
                    href={p.demo}
                    className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#2563EB] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-[#1D4ED8]"
                  >
                    Executive Case Study
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                  <a
                    href={p.github}
                    aria-label="Repository or documentation"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] px-3.5 py-2.5 text-xs font-bold text-[#64748B] transition-colors hover:bg-[#1E3A8A] hover:text-white"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}