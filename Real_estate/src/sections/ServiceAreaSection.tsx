'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { ServiceArea } from '@/types/sanity'

type ServiceAreaSectionProps = {
  data: ServiceArea
}

const markerPositions = ['top-1/2 right-48', 'bottom-3 right-48', 'top-24 right-44']

export const ServiceAreaSection = ({ data }: ServiceAreaSectionProps) => {
  const locations = data.locations ?? []
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="bg-cream py-20 dark:bg-dark-bg" id="service">
      <p className="text-2xl px-6 py-5 uppercase tracking-[0.3em] text-muted dark:text-gray-400">Find us</p>
      <h3 className="text-6xl pb-3 text-center font-semibold text-charcoal dark:text-dark-text">{data.title ?? 'Our service area'}</h3>
      <div className="mx-auto grid max-w-8xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        
        {/* Map Section */}
        <div className="relative rounded-3xl border border-border bg-[#0D0D0D]/95 p-4 shadow-card hover:shadow-xl transition-shadow dark:border-dark-border dark:bg-dark-surface">
          {data.mapImage ? (
            <div className="relative overflow-hidden rounded-[26px] w-[700px] h-[400px] lg:h-[400px]">
            <Image
              src={data.mapImage}
              alt="Service area map"
              fill
              className="object-cover rounded-[26px]"
            />

              {/* Markers */}
              {locations.slice(0, markerPositions.length).map((location, index) => (
                <div
                  key={location.name}
                  className={`absolute ${markerPositions[index]} -translate-x-1/2 -translate-y-1/2`}
                >
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`relative flex h-10 w-10 items-center justify-center rounded-full shadow-card transition-transform
                      ${activeIndex === index ? 'bg-blue-400 scale-125' : 'bg-accent animate-pulse'}`}
                  >
                    •
                  </button>

                  {/* Tooltip */}
                  {activeIndex === index && (
                    <div className="absolute bottom-full mb-2 w-max rounded-md bg-white dark:bg-dark-surface px-3 py-1 text-sm text-charcoal dark:text-dark-text shadow-md">
                      {location.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="h-[420px] w-full rounded-[26px] bg-border dark:bg-dark-border" />
          )}
        </div>

        {/* Locations List */}
        <div className="space-y-6">
          
          

          <div className="space-y-4">
            {locations.map((location, i) => (
              <div
                key={location.name}
                className="rounded-2xl border border-black bg-white px-5 py-4 shadow-card dark:border-dark-border dark:bg-dark-surface transform transition-transform hover:scale-105 hover:bg-yellow-50"
              >
                <p className="text-lg font-semibold text-charcoal dark:text-dark-text">{location.name}</p>
                <p className="text-sm text-muted dark:text-gray-400">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
