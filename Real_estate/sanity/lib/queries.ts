import groq from 'groq'

export const testimonialsQuery = groq`*[_type == "testimonial"]|order(order asc){
  quote,
  author,
  role,
  "avatar": avatar.asset->url
}`

export const siteContentQuery = groq`{
  "siteSettings": *[_type == "siteSettings"][0]{
    title,
    ctaText,
    "logo": logo.asset->url,
    navigation[]{label, href},
    footerLinks[]{label, href},
    socialLinks[]{platform, href}
  },
  "hero": *[_type == "hero"][0]{
    title,
    subtitle,
    numberLabels,
    heroImageCaption,
    ctaText,
    "heroImage": heroImage.asset->url,
    "badgeLeft": badgeLeftImage.asset->url,
    "badgeRight": badgeRightImage.asset->url
  },
  "highlightCard": *[_type == "highlightCard"][0]{
    "image": image.asset->url,
    ctaText,
    "locations": locations[]->{
      name,
      title,
      subtitle,
      "image": image.asset->url
    }
  },
  "featureSection": *[_type == "featureSection"][0]{title, subtitle,cards},
  "neighborhoods": *[_type == "popularNeighborhood"][0]{
    title,
    cards[]{
      price,
      description,
      location,
      "image": image.asset->url
    },
    primaryCta,
    secondaryCta
  },
  "estimator": *[_type == "estimatorSection"][0]{
    title,
    location,
    propertyType,
    duration,
    loanType,
    verifiedNote,
    monthlyEstimate,
    breakdownItems,
    ctaText
  },
  "aboutUs": *[_type == "aboutUs"][0]{
    heading,
    stats,
    "sideImage": sideImage.asset->url
  },
  "serviceArea": *[_type == "serviceArea"][0]{
    title,
    "mapImage": mapImage.asset->url,
    locations
  },
  "testimonials": ${testimonialsQuery}
}`

