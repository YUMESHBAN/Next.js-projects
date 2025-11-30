import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'
import {AboutSection} from '@/sections/AboutSection'
import {EstimatorSection} from '@/sections/EstimatorSection'
import {FinalCTASection} from '@/sections/FinalCTASection'
import {HeroSection} from '@/sections/HeroSection'
import {JourneySection} from '@/sections/JourneySection'
import {NeighborhoodsSection} from '@/sections/NeighborhoodsSection'
import {SearchBanner} from '@/sections/SearchBanner'
import {ServiceAreaSection} from '@/sections/ServiceAreaSection'
import {TestimonialsSection} from '@/sections/TestimonialsSection'
import type {SiteContent} from '@/types/sanity'
import {clientFetch} from '@/lib/sanity'
import {withDefaultSiteContent} from '@/data/defaultSiteContent'
import {siteContentQuery} from '../../sanity/lib/queries'

export default async function Home() {
  let fetchedContent: SiteContent | null = null
  try {
    fetchedContent = await clientFetch<SiteContent>(siteContentQuery)
  } catch (error) {
    console.error('Failed to fetch site content from Sanity, using defaults instead.', error)
  }

  const data = withDefaultSiteContent(fetchedContent)

  return (
    <div className="bg-cream text-charcoal dark:bg-dark-bg dark:text-dark-text">
      <Header settings={data.siteSettings} />
      <main>
        <HeroSection hero={data.hero} />
        <SearchBanner data={data.highlightCard} />
        <JourneySection data={data.featureSection} />
        <NeighborhoodsSection data={data.neighborhoods} />
        <EstimatorSection data={data.estimator} locations={data.highlightCard?.locations} />
        <AboutSection data={data.aboutUs} />
        <ServiceAreaSection data={data.serviceArea} />
        <TestimonialsSection testimonials={data.testimonials} />
        <FinalCTASection settings={data.siteSettings} />
      </main>
      <Footer settings={data.siteSettings} />
    </div>
  )
}
