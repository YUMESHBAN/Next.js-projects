import {defineField, defineType} from 'sanity'

export const highlightCard = defineType({
  name: 'highlightCard',
  title: 'Highlight Card',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Thumbnail Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'location'}],
        },
      ],
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
    }),
  ],
})

