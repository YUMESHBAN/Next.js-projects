export const seedData = {
  siteSettings: {
    _id: 'site-settings-singleton',
    title: 'flatter',
    ctaText: 'Get Started',
    navigation: [
      {label: 'Home', href: '#top'},
      {label: 'About Us', href: '#about'},
      {label: 'Features', href: '#journey'},
      {label: 'Career', href: '#service'},
      {label: 'FAQ', href: '#testimonials'},
      {label: 'Blog', href: '#neighborhoods'},
    ],
    footerLinks: [
      {label: 'About', href: '#about'},
      {label: 'Solutions', href: '#journey'},
      {label: 'Pricing', href: '#estimator'},
      {label: 'Resources', href: '#testimonials'},
    ],
    socialLinks: [
      {platform: 'IG', href: 'https://instagram.com'},
      {platform: 'FB', href: 'https://facebook.com'},
      {platform: 'LN', href: 'https://linkedin.com'},
    ],
  },
  hero: {
    _id: 'hero-singleton',
    title: 'Hello Future Home Owners',
    subtitle:
      'Searching for your new home? Looking for a mortgage? No matter where you’re in the home buying journey, you’ve come to the right place.',
    
    heroImageUrl:
      'https://images.unsplash.com/photo-1505692962192-3f6dbfa1f3f4?auto=format&fit=crop&w=900&q=80',
    heroImageCaption: 'Every home buying journey is unique.',
    ctaText: 'Get Started',
  },
  highlightCard: {
    _id: 'highlight-card-singleton',
    locationTitle: 'South Boston Loft',
    locationSubtitle: 'Downtown, Boston',
    imageUrl:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80',
    ctaText: 'Start Search',
  },
  featureSection: {
    _id: 'feature-section-singleton',
    title: 'Every home buying journey is unique',
    subtitle:
      'Find a tailored plan for your household, with curated listings, in-house financing experts, and concierge closing teams.',
    cards: [
      {title: 'Find and finance your home with online', linkText: 'Start with your mortgage', icon: 'arrow'},
      {title: 'Find and finance with experts', linkText: 'Talk with our advisors', icon: 'arrow'},
      {title: 'Find and finance with partners', linkText: 'Meet with your realtor', icon: 'arrow'},
    ],
  },
  neighborhoods: {
    _id: 'popular-neighborhood-singleton',
    title: 'The most popular neighborhoods in Boston',
    cards: [
      {
        price: '$1,781,200',
        description: 'For Sale | Vista Residence Downtown',
        location: 'Seaport',
        imageUrl:
          'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
      },
      {
        price: '$1,928,00',
        description: 'For Sale | Skyline Residency',
        location: 'Back Bay',
        imageUrl:
          'https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=800&q=80',
      },
      {
        price: '$1,650,00',
        description: 'For Sale | Beacon Street Condo',
        location: 'Beacon Hill',
        imageUrl:
          'https://images.unsplash.com/photo-1497644083578-611b798c60f3?auto=format&fit=crop&w=800&q=80',
      },
    ],
    primaryCta: 'Search more neighborhoods',
    secondaryCta: 'View More',
  },
  estimator: {
    _id: 'estimator-section-singleton',
    title: 'Estimate how much you could borrow',
    location: {
      label: 'Location',
      options: ['Boston, MA', 'Cambridge, MA', 'Somerville, MA'],
      defaultValue: 'Boston, MA',
    },
    propertyType: {
      label: 'Property Type',
      options: ['Single Family', 'Condo', 'Townhouse'],
      defaultValue: 'Single Family',
    },
    duration: {
      label: 'Duration',
      options: ['15 Years', '20 Years', '30 Years'],
      defaultValue: '20 Years',
    },
    loanType: {
      label: 'Loan Type',
      options: ['Fixed', 'Adjustable'],
      defaultValue: 'Fixed',
    },
    verifiedNote: 'Verified by HighQuality Bank',
    monthlyEstimate: 17812.2,
    breakdownItems: [
      {label: 'Total home budget', value: '$2,250,000'},
      {label: 'Down payment', value: '$450,000'},
      {label: 'Interest rate', value: '5.2%'},
      {label: 'Loan duration', value: '20 years'},
    ],
    ctaText: 'Estimate loan',
  },
  aboutUs: {
    _id: 'about-us-singleton',
    heading: 'HighQuality has been helping people of Boston to find their dream homes.',
    stats: [
      {value: '90k+', label: 'Customers'},
      {value: '45k+', label: 'Units Ready'},
      {value: '5k+', label: 'Units Sold'},
    ],
    sideImageUrl:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
  },
  serviceArea: {
    _id: 'service-area-singleton',
    title: 'Our service area',
    mapImageUrl:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    locations: [
      {name: 'Kotagede Yogyakarta', address: 'Main Street 10001'},
      {name: 'Makam Imogiri Jogja', address: 'Heritage Avenue 203'},
      {name: 'Condongcatur Sleman', address: 'Sunset Blvd 55'},
    ],
  },
  testimonials: [
    {
      _id: 'testimonial-1',
      quote:
        'High Quality guided us through all the process with a lot of patience and professionalism, answering all our questions.',
      author: 'Linda Amalia',
      role: 'Creative Studio',
      avatarUrl:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      order: 1,
    },
    {
      _id: 'testimonial-2',
      quote: 'They made our mortgage approval painless and fast. We felt supported on every call.',
      author: 'Jason Wright',
      role: 'Product Manager',
      avatarUrl:
        'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80',
      order: 2,
    },
    {
      _id: 'testimonial-3',
      quote:
        'From listings to closing, the team delivered a flawless experience that matched our timeline.',
      author: 'Alicia Gomez',
      role: 'Interior Designer',
      avatarUrl:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
      order: 3,
    },
  ],
}


