'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Reveal } from './reveal'
import { Mail, MapPin, Send, Check, ShieldCheck, Clock, X, MessageSquare, Phone } from 'lucide-react'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showModal, setShowModal] = useState(false)

  const handleSubmitClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleMethodSelect = async (method: 'email' | 'whatsapp') => {
    setShowModal(false)
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(document.querySelector('form')!)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const company = formData.get('company') as string
    const budget = formData.get('budget') as string
    const message = formData.get('message') as string

    if (method === 'whatsapp') {
      const whatsappMessage = `New Executive Inquiry:%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Organization:* ${encodeURIComponent(company)}%0A*Budget:* ${encodeURIComponent(budget)}%0A*Message:* ${encodeURIComponent(message)}`
      window.open(`https://wa.me/919725454382?text=${whatsappMessage}`, '_blank')
      setSubmitStatus('success')
      setIsSubmitting(false)
    } else {
      try {
        const keyResponse = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, company, budget, message }),
          signal: AbortSignal.timeout(15000),
        })
        const keyData = await keyResponse.json()
        if (!keyData.success || !keyData.accessKey) {
          console.error('Failed to get access key:', keyData)
          setSubmitStatus('error')
          return
        }

        const web3FormsData = new FormData()
        web3FormsData.append('access_key', keyData.accessKey)
        web3FormsData.append('name', name)
        web3FormsData.append('email', email)
        web3FormsData.append('company', company)
        web3FormsData.append('budget', budget)
        web3FormsData.append('message', message)
        web3FormsData.append('subject', `New Executive Inquiry from ${name}`)
        web3FormsData.append('from_name', 'Executive Contact Form')

        const web3Response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: web3FormsData,
          signal: AbortSignal.timeout(15000),
        })
        const responseText = await web3Response.text()
        let web3Result: any = {}
        try {
          web3Result = JSON.parse(responseText)
        } catch {
          web3Result = { success: false, message: responseText }
        }

        if (web3Response.ok && web3Result.success) {
          setSubmitStatus('success')
          setShowModal(false)
          document.querySelector('form')?.reset()
        } else {
          console.error('Web3Forms submission failed:', web3Result)
          setSubmitStatus('error')
        }
      } catch (error) {
        console.error('Submission error:', error)
        setSubmitStatus('error')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <>
      <section id="contact" className="relative px-6 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-indigo-500/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-9 lg:p-11 shadow-xs">
            <div className="relative grid gap-9 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E2E8F0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#64748B] shadow-xs">
                    <span className="h-2 w-2 rounded-full bg-[#0EA5E9]" />
                    Direct Dialogue
                  </span>
                </Reveal>
                <Reveal delay={0.06}>
                  <h2 className="mt-4 text-balance font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1E3A8A] leading-tight">
                    Initiate strategic{' '}
                    <span className="text-[#2563EB]">engagement</span>.
                  </h2>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="mt-3 text-pretty text-xs sm:text-sm leading-relaxed text-[#64748B]">
                    Whether you are planning a high-stakes product launch, scaling an enterprise design system, or seeking Fractional CTO advisory, submit your requirements below to reach <strong>Vora Bharat</strong>.
                  </p>
                </Reveal>

                <Reveal delay={0.16}>
                  <div className="mt-6 space-y-4 border-t border-[#E2E8F0] pt-5">
                    <motion.a
                      href="mailto:vora.bharat@executive.dev"
                      className="flex items-center gap-3 text-xs sm:text-sm text-[#64748B] transition-colors hover:text-[#1E3A8A] group"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span 
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E2E8F0] text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Mail className="h-4 w-4" />
                      </motion.span>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] sm:text-xs text-[#64748B] font-bold uppercase">Direct Executive Email</div>
                        <div className="text-xs sm:text-sm font-bold text-[#1E3A8A] truncate">vorab48@gmail.com</div>
                      </div>
                    </motion.a>

                    <motion.a
                      href="tel:+919725454382"
                      className="flex items-center gap-3 text-xs sm:text-sm text-[#64748B] transition-colors hover:text-[#1E3A8A] group"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span 
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E2E8F0] text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        <Phone className="h-4 w-4" />
                      </motion.span>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] sm:text-xs text-[#64748B] font-bold uppercase">Direct Contact</div>
                        <div className="text-xs sm:text-sm font-bold text-[#1E3A8A] truncate">+91 97254 54382</div>
                      </div>
                    </motion.a>

                    <div className="flex items-center gap-3 text-xs sm:text-sm text-[#64748B]">
                      <motion.span 
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E2E8F0] text-[#1E3A8A]"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        <Clock className="h-4 w-4" />
                      </motion.span>
                      <div>
                        <div className="text-[10px] sm:text-xs text-[#64748B] font-bold uppercase">Response SLA</div>
                        <div className="text-xs sm:text-sm font-bold text-[#1E3A8A]">Under 12 Business Hours</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm text-[#64748B]">
                      <motion.span 
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E2E8F0] text-[#1E3A8A]"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <MapPin className="h-4 w-4" />
                      </motion.span>
                      <div>
                        <div className="text-[10px] sm:text-xs text-[#64748B] font-bold uppercase">Availability & Location</div>
                        <div className="text-xs sm:text-sm font-bold text-[#1E3A8A]">Global Executive Advisory & Consultations</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={0.12}>
                  <motion.form 
                    onSubmit={handleSubmitClick} 
                    className="space-y-4 rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-7 shadow-xs"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
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
                          className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#1E3A8A] outline-none transition-colors focus:border-[#2563EB] focus:bg-white"
                        >
                          <option value="$15k–$30k">$15,000 – $30,000</option>
                          <option value="$30k–$60k">$30,000 – $60,000</option>
                          <option value="$60k+">$60,000+</option>
                          <option value="advisory">Fractional CTO / Retainer</option>
                          <option value="custom">Custom Budget</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#64748B]"
                      >
                        Strategic Objectives & Scope
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={3}
                        placeholder="Outline your timeline, current architecture, and key business goals…"
                        className="w-full resize-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#1E3A8A] outline-none transition-colors placeholder:text-[#64748B]/50 focus:border-[#2563EB] focus:bg-white"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all duration-200 hover:bg-[#1D4ED8] disabled:opacity-70 disabled:cursor-not-allowed"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          Submitted Successfully
                        </>
                      ) : (
                        <>
                          Submit
                          <motion.div
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Send className="h-3 w-3" />
                          </motion.div>
                        </>
                      )}
                    </motion.button>

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 rounded-xl bg-green-50 border border-green-200 p-3 text-xs font-medium text-green-700"
                      >
                        <Check className="h-3.5 w-3.5" />
                        <span>Your message has been sent successfully! We'll respond within 12 business hours.</span>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 rounded-xl bg-red-50 border border-red-200 p-3 text-xs font-medium text-red-700"
                      >
                        <span>Something went wrong. Please try again or contact us directly via email.</span>
                      </motion.div>
                    )}

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#64748B] pt-0.5 font-medium text-center">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#0EA5E9] shrink-0" />
                      <span>Strict NDA & Enterprise Confidentiality Guaranteed</span>
                    </div>
                  </motion.form>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-[#1E3A8A]">Choose Submission Method</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="h-4 w-4 text-[#64748B]" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-[#64748B] mb-4">
                Select how you would like to send your message. Both methods ensure your inquiry reaches us securely.
              </p>

              <div className="space-y-2.5">
                <motion.button
                  onClick={() => handleMethodSelect('email')}
                  disabled={isSubmitting}
                  className="w-full flex items-center gap-3 rounded-xl border-2 border-[#E2E8F0] p-3 sm:p-4 hover:border-[#2563EB] hover:bg-blue-50/50 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-bold text-[#1E3A8A]">Send via Email</div>
                    <div className="text-[11px] text-[#64748B] mt-0.5">Direct delivery to our executive inbox</div>
                  </div>
                  {isSubmitting && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="h-4 w-4 border-2 border-[#2563EB] border-t-transparent rounded-full"
                    />
                  )}
                </motion.button>

                <motion.button
                  onClick={() => handleMethodSelect('whatsapp')}
                  disabled={isSubmitting}
                  className="w-full flex items-center gap-3 rounded-xl border-2 border-[#E2E8F0] p-3 sm:p-4 hover:border-green-500 hover:bg-green-50/50 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-bold text-[#1E3A8A]">Send via WhatsApp</div>
                    <div className="text-[11px] text-[#64748B] mt-0.5">Instant message to +91 9725454382</div>
                  </div>
                  {isSubmitting && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="h-4 w-4 border-2 border-green-600 border-t-transparent rounded-full"
                    />
                  )}
                </motion.button>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="mt-3 w-full rounded-xl border border-[#E2E8F0] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#64748B] hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
      <motion.input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#1E3A8A] outline-none transition-colors placeholder:text-[#64748B]/50 focus:border-[#2563EB] focus:bg-white"
        whileFocus={{ scale: 1.01 }}
      />
    </div>
  )
}