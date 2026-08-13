'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'

const SLIDE_INTERVAL = 1500
const SLIDE_DURATION = 0.3

export function ProjectImageSlider({
  images,
  alt,
}: {
  images: string[]
  alt: string
}) {
  const [current, setCurrent] = useState(0)
  const [isTouch, setIsTouch] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const hoverRef = useRef(false)
  const touchRef = useRef(false)
  const lastTapRef = useRef(0)
  const directionRef = useRef(1) // 1 = forward, -1 = backward

  const count = images.length

  const goTo = useCallback(
    (dir: number) => {
      if (count <= 1) return
      directionRef.current = dir
      setCurrent((c) => (c + dir + count) % count)
    },
    [count]
  )

  const next = useCallback(() => goTo(1), [goTo])
  const prev = useCallback(() => goTo(-1), [goTo])

  // Detect touch devices once
  useEffect(() => {
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0)
    setIsTouch(isTouchDevice)
  }, [])

  // Auto-slide with ping-pong (forward → end → backward → start → repeat)
  useEffect(() => {
    if (count <= 1) return

    const id = window.setInterval(() => {
      if (!isTouch && hoverRef.current) return
      if (touchRef.current) return
      if (lightboxOpen) return

      setCurrent((c) => {
        let dir = directionRef.current
        let nextPos = c + dir

        // Bounce at boundaries
        if (nextPos >= count) {
          dir = -1
          nextPos = count - 2
        } else if (nextPos < 0) {
          dir = 1
          nextPos = 1
        }

        directionRef.current = dir
        return nextPos
      })
    }, SLIDE_INTERVAL)

    return () => window.clearInterval(id)
  }, [count, isTouch, lightboxOpen])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchRef.current = true
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) next()
      else prev()
    }

    // Resume auto-slide shortly after touch ends
    window.setTimeout(() => {
      touchRef.current = false
    }, 1500)
  }

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxOpen, next, prev])

  if (count === 0) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F1F5F9]" />
    )
  }

  return (
    <>
      <div
        className="group relative aspect-[16/9] w-full overflow-hidden bg-[#0F172A] cursor-zoom-in select-none"
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={() => setLightboxOpen(true)}
        onClick={() => {
          const now = Date.now()
          if (now - lastTapRef.current < 300) {
            setLightboxOpen(true)
            lastTapRef.current = 0
          } else {
            lastTapRef.current = now
          }
        }}
        role="img"
        aria-label={`${alt} image slider — double-click to enlarge`}
      >
        {/* Sliding track — all images side by side, track translates */}
        <motion.div
          className="flex h-full w-full"
          animate={{ x: `-${current * 100}%` }}
          transition={{ duration: SLIDE_DURATION, ease: [0.22, 1, 0.36, 1] }}
        >
          {images.map((src, i) => (
            <div key={src} className="relative h-full w-full shrink-0">
              <Image
                src={src}
                alt={`${alt} — image ${i + 1}`}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </motion.div>

        {/* Subtle bottom gradient for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

        {/* Zoom hint */}
        <div className="pointer-events-none absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <ZoomIn className="h-4 w-4" />
        </div>

        {/* Arrow navigation */}
        {count > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              onDoubleClick={(e) => e.stopPropagation()}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white opacity-0 transition-all duration-200 hover:bg-[#2563EB] hover:scale-110 group-hover:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              onDoubleClick={(e) => e.stopPropagation()}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white opacity-0 transition-all duration-200 hover:bg-[#2563EB] hover:scale-110 group-hover:opacity-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Pagination dots */}
        {count > 1 && (
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation()
                  directionRef.current = i > current ? 1 : -1
                  setCurrent(i)
                }}
                onDoubleClick={(e) => e.stopPropagation()}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === current
                    ? 'w-5 bg-[#2563EB]'
                    : 'w-1.5 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox — opens INSTANTLY on double-click at full size */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close image viewer"
            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative flex h-full w-full items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={current}
              src={images[current]}
              alt={`${alt} — image ${current + 1} enlarged`}
              width={1600}
              height={900}
              priority
              className="max-h-[90vh] w-auto max-w-[95vw] rounded-xl object-contain shadow-2xl"
              sizes="95vw"
            />

            {/* Lightbox navigation */}
            {count > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#2563EB] transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#2563EB] transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === current ? 'w-5 bg-[#2563EB]' : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}