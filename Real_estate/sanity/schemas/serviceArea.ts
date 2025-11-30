import {defineField, defineType} from 'sanity'

export const serviceArea = defineType({
  name: 'serviceArea',
  title: 'Service Area',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mapImage',
      title: 'Map Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [
        defineField({
          name: 'location',
          type: 'object',
          fields: [
            {name: 'name', type: 'string'},
            {name: 'address', type: 'string'},
          ],
        }),
      ],
    }),
  ],
})

