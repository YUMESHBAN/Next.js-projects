import {defineField, defineType} from 'sanity'

export const estimatorSection = defineType({
  name: 'estimatorSection',
  title: 'Estimator Section',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'location',
      title: 'Location Select',
      type: 'object',
      fields: [
        {name: 'label', type: 'string'},
        {name: 'options', type: 'array', of: [{type: 'string'}]},
        {name: 'defaultValue', type: 'string'},
      ],
    }),
    defineField({
      name: 'propertyType',
      title: 'Property Type Select',
      type: 'object',
      fields: [
        {name: 'label', type: 'string'},
        {name: 'options', type: 'array', of: [{type: 'string'}]},
        {name: 'defaultValue', type: 'string'},
      ],
    }),
    defineField({
      name: 'duration',
      title: 'Duration Select',
      type: 'object',
      fields: [
        {name: 'label', type: 'string'},
        {name: 'options', type: 'array', of: [{type: 'string'}]},
        {name: 'defaultValue', type: 'string'},
      ],
    }),
    defineField({
      name: 'loanType',
      title: 'Loan Type Select',
      type: 'object',
      fields: [
        {name: 'label', type: 'string'},
        {name: 'options', type: 'array', of: [{type: 'string'}]},
        {name: 'defaultValue', type: 'string'},
      ],
    }),
    defineField({
      name: 'verifiedNote',
      title: 'Verified Note',
      type: 'string',
    }),
    defineField({
      name: 'monthlyEstimate',
      title: 'Monthly Estimate',
      type: 'number',
    }),
    defineField({
      name: 'breakdownItems',
      title: 'Breakdown Items',
      type: 'array',
      of: [
        defineField({
          name: 'item',
          type: 'object',
          fields: [
            {name: 'label', type: 'string'},
            {name: 'value', type: 'string'},
          ],
        }),
      ],
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
    }),
  ],
})

