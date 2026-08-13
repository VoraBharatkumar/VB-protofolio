'use client'

import { motion } from 'motion/react'
import { Reveal } from './reveal'
import { Quote, Star, Building2 } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Vora delivered an enterprise portal that genuinely stunned our board and investors. His combination of architectural discipline and visual refinement elevated our brand positioning overnight.',
    name: 'Marcus Vale',
    role: 'Chief Executive Officer',
    company: 'Apex Financial Group',
    initials: 'MV',
  },
  {
    quote:
      'Easily the most authoritative technical partner we have engaged. Fast, communicative, and the quality bar never faltered once across a high-stakes multi-region software rollout.',
    name: 'Priya Anand',
    role: 'VP of Product & Engineering',
    company: 'OmniCloud Systems',
    initials: 'PA',
  },
  {
    quote:
      'Our digital conversion jumped 38% immediately following the platform relaunch. Vora doesn’t just build web applications — he deeply understands enterprise business mechanics and capital ROI.',
    name: 'Elena Roth',
    role: 'Founder & Managing Director',
    company: 'Vanguard Retail Group',
    initials: 'ER',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 md:px-12 lg:px-20 py-20 sm:py-28 lg:py-32 bg-[#F8FAFC] border-t border-[#E2E8F0]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center mb-12 sm:mb-16">
        <h2 className="text-balance font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1E3A8A] leading-tight">
          Trusted by leaders who{' '}
          <span className="text-[#2563EB]">demand excellence</span>
        </h2>
        <p className="mt-3.5 text-pretty text-sm sm:text-base leading-relaxed text-[#64748B] font-normal">
          Direct feedback from CEOs, VPs of Engineering, and enterprise founders.
        </p>
      </div>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <motion.figure 
              className="flex h-full flex-col rounded-2xl bg-white border border-[#E2E8F0] p-6 sm:p-7 shadow-xs transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-xl"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <div className="flex items-center justify-between">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="h-7 w-7 text-[#2563EB]" />
                </motion.div>
                <motion.div 
                  className="flex gap-0.5"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <motion.div
                      key={s}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + s * 0.05 }}
                    >
                      <Star className="h-3.5 w-3.5 fill-[#0EA5E9] text-[#0EA5E9]" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.blockquote 
                className="mt-5 flex-1 text-xs sm:text-sm leading-relaxed text-[#64748B] font-normal"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                &ldquo;{t.quote}&rdquo;
              </motion.blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-[#E2E8F0] pt-4">
                <motion.div 
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E3A8A] font-display text-xs font-bold text-white shadow-xs"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {t.initials}
                </motion.div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#1E3A8A]">{t.name}</div>
                  <div className="text-xs font-bold text-[#2563EB]">{t.role}</div>
                  <div className="text-[11px] text-[#64748B] flex items-center gap-1 mt-0.5 font-medium">
                    <Building2 className="h-3 w-3 text-[#64748B]" />
                    {t.company}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}