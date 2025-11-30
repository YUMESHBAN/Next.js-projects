import Image from 'next/image'
import type {AboutUs} from '@/types/sanity'

type AboutSectionProps = {
  data: AboutUs
}

export const AboutSection = ({data}: AboutSectionProps) => {
  const stats = data.stats ?? []

  return (
    <section className="bg-cream py-20 dark:bg-dark-bg" id="about">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-muted dark:text-gray-400">About us</p>
          <h3 className="text-4xl font-semibold text-charcoal dark:text-dark-text">{data.heading}</h3>
          <div className="flex flex-col gap-6 rounded-3xl bg-[#010E1B]/95 p-6 text-white shadow-card dark:bg-dark-surface md:flex-row md:items-center md:justify-between">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl text-yellow-400 font-semibold">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
            <button
              
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

        <div className="rounded-[32px] bg-[#010E1B]/95 p-4 shadow-card dark:bg-dark-surface">
          {data.sideImage ? (
            <Image
              src={data.sideImage}
              alt="High quality buildings"
              width={520}
              height={520}
              className="h-auto w-full rounded-[26px] object-cover"
            />
          ) : (
            <div className="h-[420px] w-full rounded-[26px] bg-border dark:bg-dark-border" />
          )}
        </div>
      </div>
    </section>
  )
}


