import Image from 'next/image'
import type {PopularNeighborhood} from '@/types/sanity'
import {Button} from '@/components/ui/button'

type NeighborhoodsSectionProps = {
  data: PopularNeighborhood
}

export const NeighborhoodsSection = ({data}: NeighborhoodsSectionProps) => {
  const cards = data.cards ?? []

  return (
    <section id="neighborhoods" className="bg-cream py-20 dark:bg-dark-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
        <div className="space-y-4">
          
          <h2 className="text-center text-6xl font-semibold text-charcoal dark:text-dark-text">
            {data.title ?? 'The most popular neighborhoods in Boston'}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.slice(0, 3).map((card, index) => (
            <article key={`${card.description}-${index}`} className="rounded-3xl border border-black bg-cream p-4 shadow-card dark:bg-dark-surface">
              <div className="overflow-hidden rounded-2xl">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.description ?? 'Neighborhood'}
                    width={380}
                    height={280}
                    className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="h-56 w-full rounded-2xl bg-border dark:bg-dark-border" />
                )}
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-lg font-semibold text-charcoal dark:text-dark-text">{card.price}</p>
                <p className="text-sm text-charcoal/80 dark:text-dark-text/80">{card.description}</p>
                <p className="text-sm text-muted dark:text-gray-400">{card.location}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <Button variant="ghost" className="w-full border px-8 py-4 text-sm uppercase md:w-auto">
            {data.primaryCta ?? 'Search more neighborhoods'}
          </Button>
          <Button variant="secondary" className="w-full px-8 py-4 text-sm uppercase md:w-auto">
            {data.secondaryCta ?? 'View More'}
          </Button>
        </div>
      </div>
    </section>
  )
}


