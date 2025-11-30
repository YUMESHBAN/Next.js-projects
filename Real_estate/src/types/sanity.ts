export type NavItem = {
  label: string
  href: string
}

export type SiteSettings = {
  title: string
  logo?: string
  navigation: NavItem[]
  footerLinks: NavItem[]
  socialLinks: {platform?: string; href?: string}[]
  ctaText?: string
}

export type Hero = {
  title: string
  subtitle?: string
  badgeLeft?: string
  badgeRight?: string
  heroImage?: string
  heroImageCaption?: string
  ctaText?: string
}

export type Location = {
  name: string
  title?: string
  subtitle?: string
  image?: string
}

export type HighlightCard = {
  image?: string
  locations?: Location[]
  ctaText?: string
}

export type FeatureCard = {
  title?: string
  linkText?: string
  icon?: string
}

export type FeatureSection = {
  title?: string
  subtitle?: string
  cards: FeatureCard[]
}

export type NeighborhoodCard = {
  image?: string
  price?: string
  description?: string
  location?: string
}

export type PopularNeighborhood = {
  title?: string
  cards: NeighborhoodCard[]
  primaryCta?: string
  secondaryCta?: string
}

export type SelectField = {
  label: string
  options: string[]
  defaultValue?: string
}

export type EstimatorSection = {
  title?: string
  location?: SelectField
  propertyType?: SelectField
  duration?: SelectField
  loanType?: SelectField
  verifiedNote?: string
  monthlyEstimate?: number
  breakdownItems: {label: string; value: string}[]
  ctaText?: string
}

export type AboutUs = {
  heading?: string
  stats: {value: string; label: string}[]
  sideImage?: string
}

export type ServiceArea = {
  title?: string
  mapImage?: string
  locations: {name: string; address: string}[]
}

export type Testimonial = {
  quote: string
  author: string
  role: string
  avatar?: string
}

export type SiteContent = {
  siteSettings?: SiteSettings | null
  hero: Hero
  highlightCard: HighlightCard
  featureSection: FeatureSection
  neighborhoods: PopularNeighborhood
  estimator: EstimatorSection
  aboutUs: AboutUs
  serviceArea: ServiceArea
  testimonials: Testimonial[]
}

