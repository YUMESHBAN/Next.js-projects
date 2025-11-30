'use client'

import {AnimatePresence, motion} from 'framer-motion'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import useSWR from 'swr'
import type {Testimonial} from '@/types/sanity'
import {cn} from '@/lib/utils'

const fetcher = (url: string) => fetch(url).then((res) => res.json() as Promise<Testimonial[]>)

type TestimonialSliderProps = {
  initialTestimonials: Testimonial[]
}

export const TestimonialSlider = ({initialTestimonials}: TestimonialSliderProps) => {
  const {data: testimonials = []} = useSWR('/api/testimonials', fetcher, {
    fallbackData: initialTestimonials,
    revalidateOnFocus: false,
  })
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!testimonials.length) return
    const timer = setInterval(() => setIndex((prev) => prev + 1), 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  if (!testimonials.length) {
    return null
  }

  const safeIndex = ((index % testimonials.length) + testimonials.length) % testimonials.length
  const activeTestimonial = testimonials[safeIndex]

  const handleChange = (direction: 'prev' | 'next') => {
    setIndex((prev) => prev + (direction === 'next' ? 1 : -1))
  }

  return (

    <div className="rounded-3xl border border-border bg-white/90 px-6 py-8 shadow-card dark:border-dark-border dark:bg-dark-surface/90" role="region" aria-label="Testimonials">
      <p className="text-xl text-center font-bold pb-5 tracking-[0.35em]  dark:text-gray-400">Testimonies from our clients:</p>
      <AnimatePresence mode="wait">
        <motion.div
          key={safeIndex}
          initial={{opacity: 0, x: 30}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -30}}
          transition={{duration: 0.35}}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed text-charcoal/90 dark:text-dark-text/90">"{activeTestimonial.quote}"</p>
          <div className="flex items-center gap-4">
            {activeTestimonial.avatar ? (
              <Image
                src={activeTestimonial.avatar}
                alt={activeTestimonial.author}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
            ) : (
              <div className="h-14 w-14 rounded-full bg-border dark:bg-dark-border" />
            )}
            <div>
              <p className="text-base font-semibold text-charcoal dark:text-dark-text">{activeTestimonial.author}</p>
              <p className="text-sm text-muted dark:text-gray-400">{activeTestimonial.role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-muted dark:text-gray-400">
          {safeIndex + 1}/{testimonials.length}
        </span>
        <div className="flex gap-3">
          {(['prev', 'next'] as const).map((direction) => (
            <button
              key={direction}
              type="button"
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-full border border-border text-lg text-charcoal transition hover:bg-charcoal hover:text-cream dark:border-dark-border dark:text-dark-text dark:hover:bg-grey-500 dark:hover:text-dark-text',
              )}
              onClick={() => handleChange(direction)}
              aria-label={direction === 'next' ? 'Next testimonial' : 'Previous testimonial'}
            >
              {direction === 'next' ? '→' : '←'}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}


