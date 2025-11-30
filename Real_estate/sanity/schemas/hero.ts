import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    
    defineField({
      name: 'badgeLeftImage',
      title: 'Badge Left Image',
      type: 'image'
    }),

    defineField({
      name: 'badgeRightImage',
      title: 'Badge Right Image',
      type: 'image'
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heroImageCaption',
      title: 'Hero Image Caption',
      type: 'string',
    }),
    defineField({
      name: 'ctaText',
      title: 'Primary CTA Text',
      type: 'string',
    }),
  ],
})

