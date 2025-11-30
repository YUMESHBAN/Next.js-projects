import {defineField, defineType} from 'sanity'

export const popularNeighborhood = defineType({
  name: 'popularNeighborhood',
  title: 'Popular Neighborhoods',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        defineField({
          name: 'card',
          type: 'object',
          fields: [
            {name: 'image', type: 'image', options: {hotspot: true}},
            {name: 'price', type: 'string'},
            {name: 'description', type: 'string'},
            {name: 'location', type: 'string'},
          ],
        }),
      ],
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA Text',
      type: 'string',
    }),
  ],
})

