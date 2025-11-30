import {defineField, defineType} from 'sanity'

export const featureSection = defineType({
  name: 'featureSection',
  title: 'Feature Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
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
            {name: 'title', type: 'string'},
            {name: 'linkText', type: 'string'},
            {name: 'icon', type: 'string', description: 'Icon name (e.g. arrow)'},
          ],
        }),
      ],
    }),
  ],
})

