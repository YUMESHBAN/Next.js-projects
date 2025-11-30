import Link from 'next/link'
import type {FeatureSection} from '@/types/sanity'

type JourneySectionProps = {
  data: FeatureSection
}

export const JourneySection = ({data}: JourneySectionProps) => {
  const cards = data.cards ?? []

  return (
    <section className="bg-cream py-20 dark:bg-dark-bg" id="journey">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            
            <h2 className="text-4xl font-semibold text-charcoal dark:text-dark-text lg:text-[46px]">
              {data.title ?? 'Every home buying journey is unique'}
            </h2>
          </div>
          <p className="max-w-xl text-xl leading-relaxed text-black  dark:text-gray-400">{data.subtitle}</p>
        </div>

        <div className="relative overflow-visible py-4">
          <div
            className="flex w-max gap-6 py-8 px-8 bg-[#010E1B]/95 animate-scroll-left dark:bg-dark-surface"
            style={{ animation: "scroll-left 20s linear infinite" }}
          >
            {/* First copy */}
            {cards.map((card, index) => (
              <article
                key={`1-${card.title}-${index}`}
                className="flex w-72 flex-col justify-between rounded-3xl p-6 text-white shadow-card dark:bg-dark-surface"
              >
                <div className="flex flex-col h-full space-y-6">
                  <p className="text-2xl font-semibold">{card.title}</p>
                  <Link
                    href="#estimator"
                    className="inline-flex items-center text-sm font-medium text-accent underline-offset-4 hover:underline mt-auto"
                  >
                    {card.linkText ?? "Start with your mortgage"}
                  </Link>
                </div>
              </article>
            ))}

            {/* Second copy for seamless infinite loop */}
            {cards.map((card, index) => (
              <article
                key={`2-${card.title}-${index}`}
                className="flex w-72 flex-col justify-between rounded-3xl p-6 text-white shadow-card dark:bg-dark-surface"
              >
                <div className="flex flex-col h-full space-y-6">
                  <p className="text-2xl font-semibold">{card.title}</p>
                  <Link
                    href="#estimator"
                    className="inline-flex items-center text-sm font-medium text-accent underline-offset-4 hover:underline mt-auto"
                  >
                    {card.linkText ?? "Start with your mortgage"}
                  </Link>
                </div>
              </article>
            ))}
            {/* Third copy for seamless infinite loop */}
            {cards.map((card, index) => (
              <article
                key={`3-${card.title}-${index}`}
                className="flex w-72 flex-col justify-between rounded-3xl p-6 text-white shadow-card dark:bg-dark-surface"
              >
                <div className="flex flex-col h-full space-y-6">
                  <p className="text-2xl font-semibold">{card.title}</p>
                  <Link
                    href="#estimator"
                    className="inline-flex items-center text-sm font-medium text-accent underline-offset-4 hover:underline mt-auto"
                  >
                    {card.linkText ?? "Start with your mortgage"}
                  </Link>
                </div>
              </article>
            ))}
            {/* Fourth copy for seamless infinite loop */}
            {cards.map((card, index) => (
              <article
                key={`4-${card.title}-${index}`}
                className="flex w-72 flex-col justify-between rounded-3xl p-6 text-white shadow-card dark:bg-dark-surface"
              >
                <div className="flex flex-col h-full space-y-6">
                  <p className="text-2xl font-semibold">{card.title}</p>
                  <Link
                    href="#estimator"
                    className="inline-flex items-center text-sm font-medium text-accent underline-offset-4 hover:underline mt-auto"
                  >
                    {card.linkText ?? "Start with your mortgage"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}


