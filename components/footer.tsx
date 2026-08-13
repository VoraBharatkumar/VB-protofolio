'use client'

import { motion } from 'motion/react'
import { ShieldCheck, ArrowUp, Mail, MessageCircle, Heart } from 'lucide-react'
import { BrandIcon } from './brand-icon'

const socials = [
  { name: 'linkedin' as const, label: 'LinkedIn', href: 'https://www.linkedin.com/in/bharat-vora/' },
  { name: 'github' as const, label: 'GitHub', href: 'https://github.com' },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#2580dc] to-[#EFF6FF] border-t border-[#E2E8F0] px-6 md:px-12 lg:px-20 py-6 sm:py-8 text-[#607087] overflow-hidden">
      {/* Soft top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1356e7] to-transparent" />

      {/* Soft background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 left-1/4 h-48 w-48 -translate-x-1/2 rounded-full bg-[#2563EB]/10 blur-[80px]" />
        <div className="absolute -bottom-16 right-1/4 h-48 w-48 translate-x-1/2 rounded-full bg-[#0EA5E9]/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Top section */}
        <div className="flex flex-col items-center justify-center gap-3 pb-5 border-b border-[#E2E8F0]">
          {/* Brand */}
          <motion.a
            href="#top"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] font-display text-xs font-extrabold text-white shadow-md shadow-blue-500/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              VB
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-tight text-[#1E3A8A] flex items-center gap-1">
                Vora Bharat
                <ShieldCheck className="h-3 w-3 text-[#0EA5E9]" />
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#080c12] font-bold">
                MERN Stack Developer
              </span>
            </div>
          </motion.a>

          {/* Navigation links */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 text-[10px] font-bold uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {navLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative text-[#253852] hover:text-[#2563EB] transition-colors"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-[#2563EB]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact links */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="mailto:vorab48@gmail.com"
              className="group flex items-center gap-1.5 rounded-full bg-white border border-[#E2E8F0] px-3 py-1.5 text-[10px] font-bold text-[#64748B] hover:text-[#2563EB] hover:border-[#2563EB]/50 hover:shadow-sm transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <Mail className="h-3 w-3 text-[#2563EB]" />
              <span>vorab48@gmail.com</span>
            </motion.a>
            <motion.a
              href="https://wa.me/9725454382"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 rounded-full bg-white border border-[#E2E8F0] px-3 py-1.5 text-[10px] font-bold text-[#64748B] hover:text-[#16A34A] hover:border-[#22C55E]/50 hover:shadow-sm transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <MessageCircle className="h-3 w-3 text-[#22C55E]" />
              <span>+972 54-543-82</span>
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="flex items-center gap-2.5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            {socials.map((s, index) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-[#E2E8F0] text-[#64748B] hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <BrandIcon name={s.name} label={s.label} className="h-3.5 w-3.5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="mt-4 flex flex-col items-center justify-between gap-2 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="flex items-center gap-1.5 text-[10px] text-[#94A3B8] font-medium">
            &copy; {new Date().getFullYear()} Vora Bharat. All Rights Reserved.
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline-flex items-center gap-1">
              Made with <Heart className="h-2.5 w-2.5 text-[#F43F5E] animate-pulse" /> using Next.js
            </span>
          </p>

          <motion.a
            href="#top"
            className="group flex items-center gap-1.5 text-[10px] font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
            whileHover={{ y: -2 }}
          >
            <span>Back to top</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowUp className="h-3 w-3" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  )
}