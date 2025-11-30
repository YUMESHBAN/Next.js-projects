import Link from 'next/link'
import {Button} from '@/components/ui/button'
import type {SiteSettings} from '@/types/sanity'

type FinalCTASectionProps = {
  settings?: SiteSettings | null
}

export const FinalCTASection = ({settings}: FinalCTASectionProps) => {
  const ctaText = settings?.ctaText ?? 'Get Started'

  return (
   <section className="bg-charcoal py-5 text-cream dark:bg-dark-surface" id="contact">
  <div className="mx-auto max-w-6xl px-4">
    {/* Top Link */}
    <div className="flex justify-end mb-8">
      {/* Arrow outside the flow */}
      <Link href="#top" className="shrink-0 group border-8 border-cream absolute bottom-[80px] right-[500px] flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-2xl text-black transition-all duration-300 hover:bg-yellow-500 hover:shadow-xl relative" aria-label="Scroll to search section" > 
            {/* Hovered Arrow (↘) */} 
              <span className="text-5xl transition-all duration-300 transform group-hover:rotate-90 group-hover:opacity-0">
              🚀
              </span> 
              
            {/* Default Arrow (↓) */}
              <span className="text-5xl absolute transition-all duration-300 transform opacity-0 group-hover:opacity-100 group-hover:rotate-0 rotate-180">
              ↑ 
              </span> 
            </Link>
    </div>

    {/* Content Row: h3 on left, Button on right */}
    <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 text-center md:text-left">
      <h3 className="text-5xl font-semibold dark:text-dark-text">Have something to talk about?</h3>
      <Button variant="secondary" className="px-10 py-4 text-base border border-white text-white bg-black hover:bg-grey-500 tracking-wide" asChild>
        <Link href="#contact">{ctaText}</Link>
      </Button>
    </div>

    {/* Optional: Small heading above */}
    <p className="mt-8 text-sm uppercase tracking-[0.4em] text-cream/70 dark:text-gray-400 text-center md:text-left">
      Contact Us
    </p>
  </div>
</section>

  )
}


