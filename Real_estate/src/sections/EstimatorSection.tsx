'use client'

import {animate} from 'framer-motion'
import {useEffect, useState, useMemo, useRef} from 'react'
import {useForm, useWatch} from 'react-hook-form'
import {Button} from '@/components/ui/button'
import type {EstimatorSection as EstimatorSectionType, SelectField, Location} from '@/types/sanity'
import {formatCurrency} from '@/lib/utils'

type EstimatorSectionProps = {
  data: EstimatorSectionType
  locations?: Location[]
}

type FormValues = Record<string, string>

export const EstimatorSection = ({data, locations = []}: EstimatorSectionProps) => {
  const [locationFromQuery, setLocationFromQuery] = useState<string | null>(null)
  const hasUpdatedLocationRef = useRef(false)

  // Get location from URL query params on client side and listen for changes
  useEffect(() => {
    const updateLocationFromQuery = () => {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search)
        const location = params.get('location')
        setLocationFromQuery((prev) => {
          // Only update if it's different to prevent unnecessary re-renders
          if (prev !== location) {
            hasUpdatedLocationRef.current = false
            return location
          }
          return prev
        })
      }
    }

    // Initial read
    updateLocationFromQuery()

    // Listen for popstate events (back/forward navigation and our custom events)
    window.addEventListener('popstate', updateLocationFromQuery)
    
    // Also listen for hashchange in case URL changes
    window.addEventListener('hashchange', updateLocationFromQuery)

    // Check again after a short delay to catch any URL updates
    const timeout = setTimeout(updateLocationFromQuery, 200)

    return () => {
      window.removeEventListener('popstate', updateLocationFromQuery)
      window.removeEventListener('hashchange', updateLocationFromQuery)
      clearTimeout(timeout)
    }
  }, [])

  // Memoize location field to prevent recreation on every render
  const locationField: SelectField | null = useMemo(() => {
    if (locations.length > 0) {
      return {
        label: 'Location',
        options: locations.map((loc) => loc.name),
        defaultValue: locations[0]?.name || '',
      }
    }
    return data.location
  }, [locations, data.location])

  // Memoize select fields
  const selectFields = useMemo(() => {
    return [locationField, data.propertyType, data.duration, data.loanType].filter(
      Boolean,
    ) as SelectField[]
  }, [locationField, data.propertyType, data.duration, data.loanType])

  // Determine initial location value - prioritize query param if valid
  const getInitialLocationValue = useMemo(() => {
    if (locationFromQuery && locationField?.options?.includes(locationFromQuery)) {
      return locationFromQuery
    }
    return locationField?.defaultValue ?? locationField?.options?.[0] ?? ''
  }, [locationFromQuery, locationField])

  const defaultValues = useMemo(() => {
    return selectFields.reduce<FormValues>((acc, curr, idx) => {
      if (idx === 0) {
        acc[`field-${idx}`] = getInitialLocationValue
      } else {
        acc[`field-${idx}`] = curr.defaultValue ?? curr.options?.[0] ?? ''
      }
      return acc
    }, {})
  }, [selectFields, getInitialLocationValue])

  const {register, control, setValue} = useForm<FormValues>({defaultValues})
  const watchedValues = (useWatch({control}) ?? {}) as FormValues
  const watchedSignature = JSON.stringify(watchedValues)
  const [displayValue, setDisplayValue] = useState(0)

  // Update location field when query param changes (only once per change)
  useEffect(() => {
    if (
      locationFromQuery && 
      locationField && 
      locationField.options?.includes(locationFromQuery) &&
      !hasUpdatedLocationRef.current
    ) {
      const currentValue = watchedValues['field-0']
      if (currentValue !== locationFromQuery) {
        setValue('field-0', locationFromQuery, {shouldValidate: false, shouldDirty: false})
        hasUpdatedLocationRef.current = true
      }
    }
  }, [locationFromQuery, locationField, setValue, watchedValues])

  const baseline = data.monthlyEstimate ?? 17812.2

  useEffect(() => {
    const values: FormValues = watchedSignature ? JSON.parse(watchedSignature) : {}
    const multiplier =
      Object.values(values).reduce((acc, value, index) => {
        if (!value) return acc
        // Location (index 0) has more impact on estimation
        const weight = index === 0 ? 1.5 : 1
        return acc + (value.length * (index + 1) * weight) / 100
      }, 1) ?? 1
    const nextValue = Math.round(baseline * multiplier)
    const controls = animate(0, nextValue, {
      duration: 0.8,
      onUpdate: (value) => setDisplayValue(Math.round(value)),
    })
    return () => controls.stop()
  }, [baseline, watchedSignature])

  return (
    <section id="estimator" className="bg-cream py-20 dark:bg-dark-bg">
    <div className="mx-auto max-w-6xl px-4">
      {/* Heading above the container */}
      <h3 className="mb-8 text-4xl text-center font-semibold text-charcoal dark:text-dark-text">
        Estimate how much you could borrow from our bank partners
      </h3>
  
      {/* Dark container wrapping both panels */}
      <div className="rounded-3xl bg-gray-900 p-8 dark:bg-gray-800">
  <div className="grid gap-8 lg:grid-cols-2">
    {/* Left Side - Input Form */}
    <div>
      <form className="space-y-6" id="search-form">
        {selectFields.map((input, idx) => {
          const currentValue = watchedValues[`field-${idx}`] || ''
          return (
            <label key={`${input.label}-${idx}`} className="block text-sm font-medium text-white dark:text-white">
              <span className="mb-2 block">{input.label}</span>
              <div className="rounded-2xl border border-white/20 bg-gray-800 px-4 py-3 dark:border-white/30 dark:bg-gray-700">
                <select
                  className="w-full bg-transparent text-base text-white outline-none dark:text-white"
                  {...register(`field-${idx}`)}
                  value={currentValue}
                >
                  {input.options?.map((option) => (
                    <option key={option} value={option} className='bg-gray-800'>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </label>
          )
        })}
      </form>

      {data.verifiedNote && (
        <div className="mt-4 flex items-center gap-2 rounded-full bg-accent/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white dark:text-white">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white dark:bg-white" />
          {data.verifiedNote}
        </div>
      )}
    </div>

  
          {/* Right Side - Results Panel */}
          <div className="flex flex-col justify-between gap-8 rounded-3xl bg-white p-6 shadow-card dark:bg-gray-100">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.4em] text-muted dark:text-gray-400">Per month</p>
              <p className="text-5xl font-semibold text-charcoal dark:text-black">{formatCurrency(displayValue)}</p>
              <p className="text-sm text-muted dark:text-gray-400">Total loan and mortgage amount</p>
            </div>
  {/* yo data chei backend bata taneko ho. */}
            <div className="space-y-4">
              {data.breakdownItems?.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-border pb-2 text-sm text-charcoal/80 last:border-b-0 last:pb-0 dark:border-dark-border dark:text-dark-text/500"
                >
                  <span>{item.label}</span>
                  <span className="font-semibold dark:text-dark-text/300">{item.value}</span>
                </div>
              ))}
            </div>
  
            <div className="flex items-center justify-between gap-4">
              <Button  className="px-6 py-3 text-sm uppercase tracking-wide">
                {data.ctaText ?? 'Schedule a call'}
              </Button>
              <Button className="px-10 py-3 text-sm border border-black text-black bg-white uppercase  tracking-wide dark:bg-gray-100">Get in touch</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  

  )
}


