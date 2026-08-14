


'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

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
  const directionRef = useRef(1)

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

  // Detect touch devices
  useEffect(() => {
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0)

    setIsTouch(isTouchDevice)
  }, [])

  // Auto-slide with ping-pong behavior
  useEffect(() => {
    if (count <= 1) return

    const id = window.setInterval(() => {
      if (!isTouch && hoverRef.current) return
      if (touchRef.current) return
      if (lightboxOpen) return

      setCurrent((c) => {
        let dir = directionRef.current
        let nextPos = c + dir

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

  // Touch / swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchRef.current = true
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return

    const deltaX = e.changedTouches[0].clientX - touchStartX.current

    touchStartX.current = null

    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        next()
      } else {
        prev()
      }
    }

    window.setTimeout(() => {
      touchRef.current = false
    }, 1500)
  }

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (!lightboxOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false)
      }

      if (e.key === 'ArrowRight') {
        next()
      }

      if (e.key === 'ArrowLeft') {
        prev()
      }
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
      {/* Main Image Slider */}
      <div
        className="group relative aspect-[16/9] w-full overflow-hidden bg-[#0F172A] select-none"
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="img"
        aria-label={`${alt} image slider`}
      >
        {/* Sliding Track */}
        <motion.div
          className="flex h-full w-full"
          animate={{ x: `-${current * 100}%` }}
          transition={{
            duration: SLIDE_DURATION,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {images.map((src, i) => (
            <div
              key={src}
              className="relative h-full w-full shrink-0"
            >
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

        {/* Bottom Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

        {/* Arrow Navigation */}
        {count > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-[#2563EB] group-hover:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-[#2563EB] group-hover:opacity-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Pagination Dots */}
        {count > 1 && (
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation()

                  directionRef.current =
                    i > current ? 1 : -1

                  setCurrent(i)
                }}
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

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
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

            {/* Lightbox Navigation */}
            {count > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2563EB] sm:-left-14"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#2563EB] sm:-right-14"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Lightbox Pagination */}
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === current
                      ? 'w-5 bg-[#2563EB]'
                      : 'w-1.5 bg-white/50'
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