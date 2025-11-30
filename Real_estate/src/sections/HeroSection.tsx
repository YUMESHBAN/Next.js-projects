'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type {Hero} from '@/types/sanity'
import {Button} from '@/components/ui/button'

type HeroSectionProps = {
  hero: Hero
}

export const HeroSection = ({hero}: HeroSectionProps) => {
  const lines = hero.title.split('|').map((t) => t.trim())
  

  return (
    <section id="top" className="bg-cream-100 pb-12 pt-10 dark:bg-dark-bg">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          
          <motion.div
            initial={{opacity: 0, y: 24}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="space-y-6"
          >
            <h1 className="text-5xl font-semibold leading-tight -mt-10 text-charcoal dark:text-dark-text sm:text-5xl lg:text-[58px]">
              {lines.map((line, i) => {
                // Check if line is "Future Home" and split it to show badge between
                if (line.trim() === 'Future Home') {
                  return (
                    <span key={i} className="inline-block">
                      {/* Future */}
                      <span className="inline">Future</span>

                      {/* Badge capsule - below on mobile, inline on desktop */}
                      <span className="inline-flex items-center mx-3 align-middle">
                        <span className="inline-flex items-center justify-center bg-black text-white dark:bg-white dark:text-black px-1 py-1 rounded-full gap-1.5">
                          {/* Left badge */}
                          {hero.badgeLeft && (
                            <Image
                              src={hero.badgeLeft}
                              alt="badge-left"
                              width={32}
                              height={32}
                              className="rounded-full object-cover flex-shrink-0"
                              onError={(e) => {
                                console.error('Badge left image failed to load:', hero.badgeLeft)
                              }}
                            />
                          )}

                          {/* Right badge */}
                          {hero.badgeRight && (
                            <Image
                              src={hero.badgeRight}
                              alt="badge-right"
                              width={32}
                              height={32}
                              className="rounded-full object-cover flex-shrink-0"
                              onError={(e) => {
                                console.error('Badge right image failed to load:', hero.badgeRight)
                              }}
                            />
                          )}
                        </span>
                      </span>

                      {/* Home */}
                      <span className="inline">Home</span>
                      <br />
                    </span>
                  )
                }

                // Check if line is "Future" and next is "Home" (for separate segments)
                const next = lines[i + 1]
                const isFutureLine = line.trim() === 'Future' && next?.trim() === 'Home'

                if (isFutureLine) {
                  return (
                    <span key={i} className="inline-block">
                      {/* Future */}
                      <span className="inline">{line}</span>

                      {/* Badge capsule - below on mobile, inline on desktop */}
                      <span className="inline-flex items-center mx-2 align-middle">
                        <span className="inline-flex items-center justify-center bg-black text-white dark:bg-white dark:text-black px-1 py-1 rounded-full gap-1.5">
                          {/* Left badge */}
                          {hero.badgeLeft && (
                            <Image
                              src={hero.badgeLeft}
                              alt="badge-left"
                              width={32}
                              height={32}
                              className="rounded-full object-cover flex-shrink-0"
                            />
                          )}

                          {/* Right badge */}
                          {hero.badgeRight && (
                            <Image
                              src={hero.badgeRight}
                              alt="badge-right"
                              width={32}
                              height={32}
                              className="rounded-full object-cover flex-shrink-0"
                            />
                          )}
                        </span>
                      </span>

                      {/* Home */}
                      <span className="inline">{next}</span>
                      <br />
                    </span>
                  )
                }

                // Normal lines
                return (
                  <span key={i}>
                    <br />
                    {line}
                    <br />
                  </span>
                )
              })}
            </h1>

            <p className="max-w-xl text-lg sm:text-xl lg:text-xl py-10  text-gray-900 dark:text-gray-400">
              {hero.subtitle}
              <br/>
            </p>

            <Link
              href="#neighborhoods"
              className="inline-block rounded-pill border border-black bg-cream px-14 py-5  text-2xl font-medium  tracking-wide text-black transition hover:bg-cream-300"
            >
              {hero.ctaText ?? 'Get Started'}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative rounded-[32px] bg-gray-900 p-3 dark:bg-gray-800"
          initial={{opacity: 0, x: 48}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
        >
          {hero.heroImage ? (
            <Image
              src={hero.heroImage}
              alt={hero.heroImageCaption ?? hero.title}
              width={520}
              height={700}
              className="h-auto w-full rounded-[26px] object-cover"
              priority
              onError={(e) => {
                console.error('Hero image failed to load:', hero.heroImage)
              }}
            />
          ) : (
            <div className="aspect-[3/4] rounded-[26px] bg-gray-700 flex items-center justify-center">
              <span className="text-sm text-white">No hero image</span>
            </div>
          )}

          <div className="mt-6 relative">
            {/* Hero caption */}
            <p className="text-4xl sm:text-5xl lg:text-4xl  font-semibold leading-tight text-white drop-shadow-lg text-left">
              {hero.heroImageCaption ?? "Every home buying journey is unique."}
            </p>

            {/* Arrow outside the flow */}
            <Link href="#search" className="shrink-0 group border-8 border-cream absolute bottom-[-60px] right-[-200px] flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-2xl text-black transition-all duration-300 hover:bg-yellow-500 hover:shadow-xl relative" aria-label="Scroll to search section" > 
            {/* Hovered Arrow (↘) */} 
              <span className="text-5xl transition-all duration-300 transform group-hover:rotate-90 group-hover:opacity-0">
              ↘ 
              </span> 
              
            {/* Default Arrow (↓) */}
              <span className="text-5xl absolute transition-all duration-300 transform opacity-0 group-hover:opacity-100 group-hover:rotate-0 rotate-180">
              ↓ 
              </span> 
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
