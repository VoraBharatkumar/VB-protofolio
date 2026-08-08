'use client'

import { useState } from 'react'
import { Reveal } from './reveal'
import { Mail, MapPin, Send, Check, ShieldCheck, Clock } from 'lucide-react'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative px-6 md:px-12 lg:px-20 py-20 sm:py-28 lg:py-32 bg-white border-t border-[#E2E8F0]">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="relative grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E2E8F0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#64748B] shadow-xs">
                  <span className="h-2 w-2 rounded-full bg-[#0EA5E9]" />
                  Direct Dialogue
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-5 text-balance font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1E3A8A] leading-tight">
                  Initiate strategic{' '}
                  <span className="text-[#2563EB]">engagement</span>.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-4 text-pretty text-xs sm:text-sm leading-relaxed text-[#64748B]">
                  Whether you are planning a high-stakes product launch, scaling an enterprise design system, or seeking Fractional CTO advisory, submit your requirements below to reach <strong>Vora Bharat</strong>.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-8 space-y-4 border-t border-[#E2E8F0] pt-6">
                  <a
                    href="mailto:vora.bharat@executive.dev"
                    className="flex items-center gap-3 text-xs sm:text-sm text-[#64748B] transition-colors hover:text-[#1E3A8A] group"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E2E8F0] text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] sm:text-xs text-[#64748B] font-bold uppercase">Direct Executive Email</div>
                      <div className="text-xs sm:text-sm font-bold text-[#1E3A8A] truncate">vora.bharat@executive.dev</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#64748B]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E2E8F0] text-[#1E3A8A]">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[10px] sm:text-xs text-[#64748B] font-bold uppercase">Response SLA</div>
                      <div className="text-xs sm:text-sm font-bold text-[#1E3A8A]">Under 12 Business Hours</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#64748B]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E2E8F0] text-[#1E3A8A]">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[10px] sm:text-xs text-[#64748B] font-bold uppercase">Availability &amp; Location</div>
                      <div className="text-xs sm:text-sm font-bold text-[#1E3A8A]">Global Executive Advisory &amp; Consultations</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.12}>
                <form onSubmit={onSubmit} className="space-y-4 rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-7 shadow-xs">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Executive Name" name="name" placeholder="e.g. Sarah Jenkins" />
                    <Field
                      label="Corporate Email"
                      name="email"
                      type="email"
                      placeholder="s.jenkins@company.com"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Organization / Enterprise" name="company" placeholder="e.g. Apex Global" />
                    <div>
                      <label htmlFor="budget" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#64748B]">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-3 text-xs sm:text-sm text-[#1E3A8A] outline-none transition-colors focus:border-[#2563EB] focus:bg-white"
                      >
                        <option value="$15k–$30k">$15,000 – $30,000</option>
                        <option value="$30k–$60k">$30,000 – $60,000</option>
                        <option value="$60k+">$60,000+</option>
                        <option value="advisory">Fractional CTO / Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#64748B]"
                    >
                      Strategic Objectives &amp; Scope
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Outline your timeline, current architecture, and key business goals…"
                      className="w-full resize-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-3 text-xs sm:text-sm text-[#1E3A8A] outline-none transition-colors placeholder:text-[#64748B]/50 focus:border-[#2563EB] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-[#1D4ED8]"
                  >
                    {sent ? (
                      <>
                        <Check className="h-4 w-4" /> Inquiry Submitted — Vora Bharat will respond shortly
                      </>
                    ) : (
                      <>
                        Submit Executive Inquiry <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#64748B] pt-0.5 font-medium text-center">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#0EA5E9] shrink-0" />
                    <span>Strict NDA &amp; Enterprise Confidentiality Guaranteed</span>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#64748B]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-3 text-xs sm:text-sm text-[#1E3A8A] outline-none transition-colors placeholder:text-[#64748B]/50 focus:border-[#2563EB] focus:bg-white"
      />
    </div>
  )
}
