'use client'

import { ShieldCheck, ArrowUp } from 'lucide-react'
import { BrandIcon } from './brand-icon'

const socials = [
  { name: 'linkedin' as const, label: 'LinkedIn', href: 'https://www.linkedin.com/in/bharat-vora/' },
  { name: 'github' as const, label: 'GitHub', href: 'https://github.com' },
]

export function Footer() {
  return (
    <footer className="relative bg-[#F8FAFC] border-t border-[#E2E8F0] px-6 md:px-12 lg:px-20 py-12 sm:py-16 text-[#64748B]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row pb-8 sm:pb-12 border-b border-[#E2E8F0]">
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1E3A8A] font-display text-sm font-extrabold text-white shadow-xs transition-transform group-hover:scale-105">
              VB
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-bold tracking-tight text-[#1E3A8A] flex items-center gap-1">
                Vora Bharat
                <ShieldCheck className="h-3.5 w-3.5 text-[#0EA5E9]" />
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#64748B] font-bold">
                Web Devloper MERN
              </span>
            </div>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs font-bold uppercase tracking-wider text-[#64748B]">
            <a href="#about" className="hover:text-[#1E3A8A] transition-colors">Overview</a>
            <a href="#skills" className="hover:text-[#1E3A8A] transition-colors">Capabilities</a>
            <a href="#projects" className="hover:text-[#1E3A8A] transition-colors">Case Studies</a>
            <a href="#services" className="hover:text-[#1E3A8A] transition-colors">Advisory Services</a>
            <a href="#contact" className="hover:text-[#1E3A8A] transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[#E2E8F0] text-[#64748B] transition-all hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] shadow-xs"
              >
                <BrandIcon name={s.name} label={s.label} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-between gap-3 sm:flex-row text-center sm:text-left text-xs text-[#64748B]">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} Vora Bharat. All Rights Reserved. Enterprise Web Architecture &amp; Executive Advisory.
          </p>

          <a
            href="#top"
            className="flex items-center gap-1.5 text-xs font-bold text-[#1E3A8A] hover:text-[#2563EB] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#0EA5E9]" />
          </a>
        </div>
      </div>
    </footer>
  )
}
