'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import type { HighlightCard } from '@/types/sanity'

type SearchBannerProps = {
  data: HighlightCard
}

export const SearchBanner = ({ data }: SearchBannerProps) => {
  const router = useRouter()
  const locations = data?.locations || []
  const defaultLocation = locations[0]?.name || ''
  const [selectedLocation, setSelectedLocation] = useState<string>(defaultLocation)

  // Update selected location when locations are loaded
  useEffect(() => {
    if (locations.length > 0 && !selectedLocation) {
      setSelectedLocation(locations[0].name)
    }
  }, [locations, selectedLocation])

  if (!data || !locations.length) return null

  const selectedLocationData = locations.find((loc) => loc.name === selectedLocation) || locations[0]

  const handleNavigate = () => {
    // Update URL with location query parameter
    const url = new URL(window.location.href)
    url.searchParams.set('location', selectedLocation)
    url.hash = 'estimator'

    // Update history without reload
    window.history.pushState({}, '', url.toString())

    // Dispatch popstate event for EstimatorSection to react
    window.dispatchEvent(new PopStateEvent('popstate'))

    // Scroll to estimator section smoothly
    setTimeout(() => {
      const element = document.getElementById('estimator')
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <section id="search" className="bg-cream dark:bg-dark-bg">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-12 lg:flex-row lg:items-start lg:justify-between">

     
        <div className="flex-1  lg:w-2/3">
          <div className="flex flex-col lg:flex-row items-center gap-4 rounded-2xl bg-[#010E1B]/95 px-4 py-3 text-white shadow-card dark:bg-dark-surface">
            
            {/* Image */}
            <div className="h-32 w-48 overflow-hidden rounded-xl flex-shrink-0">
              {selectedLocationData?.image ? (
                <Image
                  src={selectedLocationData.image}
                  alt={selectedLocationData.name ?? 'location'}
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                />
              ) : data.image ? (
                <Image
                  src={data.image}
                  alt={selectedLocationData.name ?? 'highlight card'}
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-graphite dark:bg-dark-border" />
              )}
            </div>

            {/* Location Info + Dropdown */}
            <div className="flex-1 mt-3 lg:mt-0">
              <p className="text-xl text-white   text-muted dark:text-gray-400">Location</p>
              <p className="text-2xl font-semibold">{selectedLocationData?.title || selectedLocationData?.name}</p>
              <p className="text-sm text-muted dark:text-gray-400">{selectedLocationData?.subtitle}</p>

              <div className="mt-2">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white outline-none transition-colors hover:bg-white/20 focus:border-white/40 focus:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  {locations.map((location) => (
                    <option key={location.name} value={location.name} className="bg-[#010E1B]/95 text-white">
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleNavigate}
              className="group relative mt-3 lg:mt-0 flex h-[66px] w-[66px] items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white/10 dark:bg-dark-bg dark:text-dark-text dark:hover:bg-dark-border flex-shrink-0"
              aria-label="Scroll to estimator form"
            >
              {/* Default Arrow ↓ */}
              <span className="text-4xl absolute transition-all duration-300 transform opacity-100 group-hover:opacity-0">
                ↘
              </span>

              {/* Hovered Arrow ↘ */}
              <span className="text-3xl absolute transition-all duration-300 transform opacity-0 group-hover:opacity-100 group-hover:rotate-0 rotate-45">
              →
              </span>
            </button>
          </div>
        </div>

        
        <div className="lg:w-1/3 flex items-start lg:items-start mt-4 lg:mt-0">
          <p className="text-4xl font-semibold text-right text-charcoal pt-6 dark:text-dark-text leading-snug lg:text-5xl break-words">
            {data.ctaText ?? 'Start the search now.'}
          </p>
        </div>

      </div>
    </section>
  )
}
