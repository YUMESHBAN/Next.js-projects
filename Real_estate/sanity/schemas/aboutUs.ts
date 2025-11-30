import {defineField, defineType} from 'sanity'

export const aboutUs = defineType({
  name: 'aboutUs',
  title: 'About Us Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'text',
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        defineField({
          name: 'stat',
          type: 'object',
          fields: [
            {name: 'value', type: 'string'},
            {name: 'label', type: 'string'},
          ],
        }),
      ],
    }),
    defineField({
      name: 'sideImage',
      title: 'Side Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})

