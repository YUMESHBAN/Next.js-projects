import {TestimonialSlider} from '@/components/TestimonialSlider'
import type {Testimonial} from '@/types/sanity'

type TestimonialsSectionProps = {
  testimonials: Testimonial[]
}

export const TestimonialsSection = ({testimonials}: TestimonialsSectionProps) => {
  const headline = testimonials[0]?.quote ?? 'Client feedback'
  return (
    <section className="bg-cream py-20 dark:bg-dark-bg" id="testimonials">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4">
        <div className="flex flex-col gap-3 text-center">
        <p className="text-2xl text-left pb uppercase tracking-[0.35em] text-muted dark:text-gray-400">Testimonials</p>
          
        </div>
        <TestimonialSlider initialTestimonials={testimonials} />
      </div>
    </section>
  )
}


