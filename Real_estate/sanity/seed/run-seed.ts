import {Buffer} from 'node:buffer'
import {randomUUID} from 'node:crypto'
import {sanityClient} from '../config/client'
import {seedData} from './data'

type ImageField =
  | {
      _type: 'image'
      asset: {_type: 'reference'; _ref: string}
    }
  | undefined

const imageCache = new Map<string, ImageField>()

async function uploadImage(url?: string): Promise<ImageField> {
  if (!url) return undefined
  if (imageCache.has(url)) return imageCache.get(url)

  const response = await fetch(url)
  if (!response.ok) {
    console.warn(`Failed to download ${url}`)
    return undefined
  }

  const arrayBuffer = await response.arrayBuffer()
  const filename = url.split('/').pop()?.split('?')[0] ?? 'seed-image.jpg'
  const asset = await sanityClient.assets.upload('image', Buffer.from(arrayBuffer), {
    filename,
  })

  const imageField: ImageField = {_type: 'image', asset: {_type: 'reference', _ref: asset._id}}
  imageCache.set(url, imageField)
  return imageField
}

async function main() {
  if (!process.env.SANITY_API_TOKEN) {
    throw new Error('Missing SANITY_API_TOKEN. Set it before running the seed command.')
  }

  console.log('🚀 Seeding Sanity documents...')

  const {heroImageUrl, ...heroDoc} = seedData.hero
  const {imageUrl: highlightImageUrl, ...highlightDoc} = seedData.highlightCard
  const {sideImageUrl, ...aboutDoc} = seedData.aboutUs
  const {mapImageUrl, ...serviceDoc} = seedData.serviceArea

  const documents = [
    {
      ...seedData.siteSettings,
      _type: 'siteSettings',
    },
    {
      ...heroDoc,
      _type: 'hero',
      heroImage: await uploadImage(heroImageUrl),
    },
    {
      ...highlightDoc,
      _type: 'highlightCard',
      image: await uploadImage(highlightImageUrl),
    },
    {
      ...seedData.featureSection,
      _type: 'featureSection',
    },
    {
      ...seedData.neighborhoods,
      _type: 'popularNeighborhood',
      cards: await Promise.all(
        seedData.neighborhoods.cards.map(async ({imageUrl, ...card}) => ({
          ...card,
          image: await uploadImage(imageUrl),
        })),
      ),
    },
    {
      ...seedData.estimator,
      _type: 'estimatorSection',
    },
    {
      ...aboutDoc,
      _type: 'aboutUs',
      sideImage: await uploadImage(sideImageUrl),
    },
    {
      ...serviceDoc,
      _type: 'serviceArea',
      mapImage: await uploadImage(mapImageUrl),
    },
    ...(
      await Promise.all(
        seedData.testimonials.map(async ({avatarUrl, ...testimonial}) => ({
          ...testimonial,
          _type: 'testimonial',
          avatar: await uploadImage(avatarUrl),
        })),
      )
    ),
  ]

  await Promise.all(
    documents.map((doc) =>
      sanityClient.createOrReplace({
        ...doc,
        _id: doc._id ?? `${doc._type}-${randomUUID()}`,
      }),
    ),
  )

  console.log('✅ Sanity content seeded successfully.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})


