import {defineType, defineField} from 'sanity'

// Example schema - you can add your own schemas here
export const exampleSchema = defineType({
  name: 'example',
  title: 'Example',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})

export const schemaTypes = [exampleSchema]

