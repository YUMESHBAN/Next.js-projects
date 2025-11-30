import {NextResponse} from 'next/server'
import type {Testimonial} from '@/types/sanity'
import {clientFetch} from '@/lib/sanity'
import {defaultTestimonials} from '@/data/defaultSiteContent'
import {testimonialsQuery} from '../../../../sanity/lib/queries'

export async function GET() {
  try {
    const testimonials = await clientFetch<Testimonial[]>(testimonialsQuery)
    return NextResponse.json(testimonials.length ? testimonials : defaultTestimonials)
  } catch (error) {
    console.error('Failed to fetch testimonials from Sanity.', error)
    return NextResponse.json(defaultTestimonials)
  }
}


