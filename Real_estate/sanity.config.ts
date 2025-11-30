import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'
import {sanityEnv} from './sanity/config/environment'

export default defineConfig({
  name: 'real-estate-studio',
  title: 'Real Estate Studio',
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})

