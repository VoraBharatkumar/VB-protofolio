'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ShieldCheck, ChevronRight } from 'lucide-react'

const links = [
  { label: 'Overview', href: '#about' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Endorsements', href: '#testimonials' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-4"
    >
      <nav
        className={`flex w-full items-center justify-between rounded-2xl px-6 md:px-12 lg:px-20 py-3 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border border-[#E2E8F0] shadow-lg shadow-[#1E3A8A]/5'
            : 'bg-white/80 backdrop-blur-md border border-[#E2E8F0]/70'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1E3A8A] font-display text-sm font-extrabold text-white shadow-sm transition-transform"
          >
            VB
          </motion.div>
          <div className="flex flex-col">
            <span className="font-display text-sm sm:text-base font-bold tracking-tight text-[#1E3A8A] flex items-center gap-1">
              Vora Bharat
              <ShieldCheck className="h-3.5 w-3.5 text-[#0EA5E9]" />
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#64748B] font-semibold hidden sm:inline">
              Web Developer MERN
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="group relative text-xs font-bold uppercase tracking-wider text-[#64748B] transition-colors hover:text-[#1E3A8A]"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {l.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-[#2563EB] rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.a
            href="#contact"
            className="group inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#2563EB] px-4 py-2.5 text-xs font-bold tracking-wider text-white uppercase shadow-sm transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Schedule Consultation</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </motion.div>
          </motion.a>
        </div>

        <motion.button
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0] hover:text-[#1E3A8A] lg:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-3 sm:inset-x-6 top-20 rounded-2xl bg-white border border-[#E2E8F0] p-4 shadow-xl lg:hidden z-50"
          >
            <div className="flex flex-col gap-1.5">
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#64748B] transition-colors hover:bg-[#F1F5F9] hover:text-[#1E3A8A]"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 py-3 text-center text-xs font-bold text-white uppercase tracking-wider shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}